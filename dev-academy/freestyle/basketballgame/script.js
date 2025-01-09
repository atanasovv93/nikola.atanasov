const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Почетни позиции
let ballX = canvas.width / 2;
let ballY = canvas.height - 50;
let isShooting = false;

// Центрирање и сила
let centerLineX = ballX;
let direction = 5; // Брзина на линијата
let power = 0;
let increasingPower = true;

// Скор
let score = 0;

// Кош
const hoop = {
    x: canvas.width / 2 - 50,
    y: 100,
    width: 100,
    height: 10
};

// Контролери
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space' && !isShooting) {
        isShooting = true; // Започни фрлање
        shootBall(centerLineX, power);
    }
});

// Функција за цртање кош
function drawHoop() {
    ctx.fillStyle = 'red';
    ctx.fillRect(hoop.x, hoop.y, hoop.width, hoop.height);

    // Додади круг за визуелност
    ctx.beginPath();
    ctx.arc(hoop.x + hoop.width / 2, hoop.y, 50, 0, Math.PI, true);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3;
    ctx.stroke();
}

// Функција за цртање топка
function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
    ctx.fillStyle = 'orange';
    ctx.fill();
    ctx.closePath();
}

// Функција за цртање линија за центрирање
function drawCenterLine() {
    ctx.beginPath();
    ctx.moveTo(centerLineX, canvas.height - 100);
    ctx.lineTo(centerLineX, hoop.y);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 2;
    ctx.stroke();
}

// Функција за цртање лента за сила
function drawPowerBar() {
    ctx.fillStyle = 'green';
    ctx.fillRect(50, canvas.height - 30, power * 2, 20);
    ctx.strokeRect(50, canvas.height - 30, 200, 20);
}

// Логика за фрлање топка
function shootBall(center, power) {
    const hoopCenterX = hoop.x + hoop.width / 2; // Центар на кошот
    const dx = hoopCenterX - center; // Разлика по X меѓу кошот и позицијата на топката
    const dy = hoop.y - ballY; // Разлика по Y меѓу кошот и позицијата на топката
    const distance = Math.sqrt(dx * dx + dy * dy); // Раздалеченост до кошот
    const angle = Math.atan2(dy, dx); // Пресметка на аголот кон кошот

    const velocity = power / 10; // Брзина базирана на силата

    // Пресметајме брзина по X и Y
    let velocityX = velocity * Math.cos(angle);
    let velocityY = velocity * Math.sin(angle);

    // Додадени фактори на физика
    let gravity = 0.2;
    let friction = 0.99; // Топката ќе ја губи малку брзината секој пат

    const interval = setInterval(() => {
        ballX += velocityX;
        ballY += velocityY;
        velocityY += gravity; // Применување на гравитација

        velocityX *= friction; // Применување на триење
        velocityY *= friction; // Применување на триење

        // Провери дали е топката во кошот
        if (
            ballX > hoop.x &&
            ballX < hoop.x + hoop.width &&
            ballY > hoop.y &&
            ballY < hoop.y + hoop.height
        ) {
            score++;
            resetBall();
            clearInterval(interval);
        }

        // Провери дали топката паднала надвор
        if (ballY > canvas.height) {
            resetBall();
            clearInterval(interval);
        }
    }, 20);
}

// Ресетирање на топката
function resetBall() {
    ballX = canvas.width / 2;
    ballY = canvas.height - 50;
    isShooting = false;
}

// Ажурирање логика
function update() {
    if (!isShooting) {
        // Движење на линијата
        centerLineX += direction;
        if (centerLineX > canvas.width || centerLineX < 0) {
            direction *= -1;
        }

        // Ажурирање на силата
        if (increasingPower) {
            power += 2;
            if (power > 100) increasingPower = false;
        } else {
            power -= 2;
            if (power < 0) increasingPower = true;
        }
    }
}

// Цртање на сè
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawHoop();
    drawBall();
    drawCenterLine();
    drawPowerBar();

    // Прикажи скор
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 650, 30);
}

// Главна игра
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
