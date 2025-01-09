// Game variables
const container = document.getElementById("alphabetButtons");
var answerDisplay = document.getElementById("hold");
var answer = "";
var hint = "";
var life = 6;
var wordDisplay = [];
var winningCheck = "";
const containerHint = document.getElementById("clue");
const buttonHint = document.getElementById("hint");
const buttonReset = document.getElementById("reset");
const livesDisplay = document.getElementById("mylives");
var myStickman = document.getElementById("stickman");
var context = myStickman.getContext("2d");
const guessedLetters = new Set(); // Keep track of guessed letters

// Generate alphabet buttons
function generateButton() {
  var buttonsHTML = "абвгдѓежзѕијклљмнњопрстќуфхцчџш"
    .split("")
    .map(
      (letter) =>
        `<button class="alphabetButtonJS" id="${letter}">
          ${letter}
        </button>`
    )
    .join("");

  return buttonsHTML;
}

// Handle button click
function handleClick(event) {
  const isButton = event.target.nodeName === "BUTTON";
  if (isButton) {
    const button = event.target;
    const guessedLetter = button.id;

    if (!guessedLetters.has(guessedLetter)) {
      guessedLetters.add(guessedLetter); // Add to guessed letters
      button.disabled = true; // Disable the button
      button.classList.add("selected");
      guess(guessedLetter); // Process the guess
    }
  }
}

// Word array and categories
const question = [
  "Избраната категорија е Фудбалски тимови",
  "Избраната категорија е Филмови",
  "Избраната категорија е Градови",
  "Избраната категорија е Животни",
  "Избраната категорија е Храна",
  "Избраната категорија е Природни појави"
];

const categories = [
  [
    "вардар",
    "пелистер",
    "шкендија",
    "работнички",
    "брегалница"
  ],
  [
    "мирно-море",
    "златното-јаболко",
    "боемска-расправа",
    "чудесниот-свет-на-ами"
  ],
  [
    "скопје",
    "битола",
    "охрид",
    "куманово",
    "струмица"
  ],
  [
    "лав",
    "слон",
    "тигар",
    "папагал",
    "мечка"
  ],
  [
    "ајвар",
    "грав",
    "тарaтoр",
    "сарма",
    "бурек"
  ],
  [
    "виножито",
    "гром",
    "бура",
    "снег",
    "земјотрес"
  ]
];

const hints = [
  [
    "Најтрофејниот фудбалски клуб од Македонија",
    "Клуб од Битола со зелени бои",
    "Клуб од Тетово, популарен по своите навивачи",
    "Фудбалски клуб од Скопје, основан 1937 година",
    "Клуб од Штип, познат по своите сини бои"
  ],
  [
    "Македонски филм за мирниот живот на едно село",
    "Легендарен анимиран филм инспириран од македонскиот фолклор",
    "Филм за животот и борбата на боемите",
    "Анимиран филм за авантурите на едно девојче во магичен свет"
  ],
  [
    "Главниот град на Македонија",
    "Град познат како градот на конзулите",
    "Градот покрај Охридското Езеро",
    "Град во северниот дел на Македонија",
    "Град познат по карневалот"
  ],
  [
    "Кралот на животните",
    "Најголемото копнено животно",
    "Најголемиот член од семејството на мачки",
    "Шарен говорник кој може да повторува зборови",
    "Големо шумско животно кое сака мед"
  ],
  [
    "Традиционална македонска зимница направена од пиперки",
    "Популарно македонско јадење кое често се јаде во манџи",
    "Освежувачки јадење од јогурт и краставици",
    "Традиционално македонско јадење од зелка и месо",
    "Познато тестенинско јадење кое често се јаде за појадок"
  ],
  [
    "Појава со седум бои која се јавува по дожд",
    "Електрично празнење за време на бура",
    "Силни ветрови кои често носат песок или прашина",
    "Бел слој кој паѓа во зима",
    "Тресење на земјата кое може да биде катастрофално"
  ]
];

// Set answer, hint, and category
function setAnswer() {
  const categoryOrder = Math.floor(Math.random() * categories.length);
  const chosenCategory = categories[categoryOrder];
  const wordOrder = Math.floor(Math.random() * chosenCategory.length);
  const chosenWord = chosenCategory[wordOrder];

  document.getElementById("categoryName").innerHTML = question[categoryOrder];
  answer = chosenWord;
  hint = hints[categoryOrder][wordOrder];
  wordDisplay = Array.from(chosenWord, (char) => (char === "-" ? "-" : "_"));
  answerDisplay.innerHTML = wordDisplay.join(" ");
}

function showHint() {
  containerHint.innerHTML = ` Помош - ${hint}`;
}

// Initial condition setup
function init() {
  // Reset game state
  answer = "";
  hint = "";
  life = 6;
  wordDisplay = [];
  guessedLetters.clear(); // Clear guessed letters

  // Clear canvas and reset stickman drawing state
  context.clearRect(0, 0, myStickman.width, myStickman.height); // Clear the entire canvas
  context.beginPath(); // Start a fresh path
  canvas(); // Redraw the initial frame (you already have a canvas function for this)

  // Reset UI elements
  livesDisplay.innerHTML = `Ви преостануваат уште ${life} животи!`;
  containerHint.innerHTML = "";

  // Set a new word and category
  setAnswer();

  // Re-generate alphabet buttons
  container.innerHTML = generateButton();
  container.addEventListener("click", handleClick); // Re-add click listener
}


// Guess letter
function guess(guessedLetter) {
  let correctGuess = false;

  answer.split("").forEach((letter, index) => {
    if (letter === guessedLetter) {
      wordDisplay[index] = guessedLetter;
      correctGuess = true;
    }
  });

  if (correctGuess) {
    answerDisplay.innerHTML = wordDisplay.join(" ");
    if (wordDisplay.join("") === answer) {
      livesDisplay.innerHTML = "Вие Победивте!";
    }
  } else {
    life--;
    livesDisplay.innerHTML = life > 1 ? `Ви преостануваат уште ${life} животи!` : life === 1 ? `Ви преостанува уште 1 живот` : `Играта Заврши! Бараниот збор беше: ${answer}`;
    animate();
  }
}

// Draw hangman
function animate() {
  drawArray[6 - life]();
}

// Hangman drawing functions
function canvas() {
  context.strokeStyle = "#fff";
  context.lineWidth = 2;

  frame1();
  frame2();
  frame3();
  frame4();
}

function draw($pathFromx, $pathFromy, $pathTox, $pathToy) {
  context.moveTo($pathFromx, $pathFromy);
  context.lineTo($pathTox, $pathToy);
  context.stroke();
}

function frame1() {
  draw(0, 150, 150, 150); // base
}

function frame2() {
  draw(10, 0, 10, 600); // vertical pole
}

function frame3() {
  draw(0, 5, 70, 5); // top bar
}

function frame4() {
  draw(60, 5, 60, 15); // rope
}

function head() {
  context.beginPath();
  context.arc(60, 25, 10, 0, Math.PI * 2, true);
  context.stroke();
}

function torso() {
  draw(60, 36, 60, 70);
}

function rightArm() {
  draw(60, 46, 100, 50);
}

function leftArm() {
  draw(60, 46, 20, 50);
}

function rightLeg() {
  draw(60, 70, 100, 100);
}

function leftLeg() {
  draw(60, 70, 20, 100);
}

// Array of drawing functions
var drawArray = [
  frame4, // rope
  head,   // head
  torso,  // torso
  leftArm, // left arm
  rightArm, // right arm
  leftLeg, // left leg
  rightLeg // right leg
];

// Event listeners
buttonHint.addEventListener("click", showHint);
buttonReset.addEventListener("click", init);

// Start the game
window.onload = init;


