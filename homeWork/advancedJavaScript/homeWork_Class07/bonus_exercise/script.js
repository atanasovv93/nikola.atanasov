// Листа на корисници (моментално содржи еден тест-корисник)
const users = [
    { id: 1, email: 'test1@example.com', firstname: 'John', lastname: 'Doe', password: '1234' },
    { id: 2, email: 'test2@example.com', firstname: 'Jane', lastname: 'Doe', password: '4321' },
    { id: 3, email: 'test3@example.com', firstname: 'Alice', lastname: 'Smith', password: 'abcd' },
    { id: 4, email: 'test4@example.com', firstname: 'Bob', lastname: 'Johnson', password: '9876' }
];

// Додавање на event listener за копчето "Login"
document.getElementById('login-button').addEventListener('click', () => {
    const email = document.getElementById('email').value.trim(); // Земаме внесена е-пошта
    const password = document.getElementById('password').value.trim(); // Земаме внесена лозинка
    
    console.log("Login button clicked, email:", email, "password:", password);

    // Обид за најава на корисникот
    loginUser(email, password)
        .then(user => {
            console.log("User logged in:", user);
            document.getElementById('welcome-message').innerText = `Welcome back, ${user.firstname}!`;
            toggleView('login-container', false); // Криеме формата за најава
            toggleView('welcome-container', true); // Прикажуваме порака за добредојде
            clearLoginForm(); // Исчисти ги полињата за најава
        })
        .catch(error => {
            console.log("Login error:", error);
            displayMessage(error, 'login-message'); // Прикажуваме порака за грешка
        });
});

// Функција за најавување на корисник
function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(u => u.email === email && u.password === password);
            console.log("Login attempt, user found:", user);
            user ? resolve(user) : reject('Invalid credentials'); // Проверуваме дали постои корисникот
        }, 1000);
    });
}

// Event listener за копчето "Logout"
document.getElementById('logout-button').addEventListener('click', () => {
    console.log("Logout clicked");
    toggleView('welcome-container', false); // Криеме пораката за добредојде
    toggleView('login-container', true); // Прикажуваме ја формата за најава
});

// Event listener за линкот "Register Here"
document.getElementById('register-link').addEventListener('click', () => {
    console.log("Register link clicked");
    toggleView('login-container', false); // Криеме формата за најава
    toggleView('register-container', true); // Прикажуваме ја формата за регистрација
});

// Event listener за копчето "Register"
document.getElementById('register-button').addEventListener('click', () => {
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();
    
    console.log("Register button clicked:", firstname, lastname, email);

    // Обид за регистрација на корисник
    registerUser(firstname, lastname, email, password)
        .then(message => {
            console.log("Registration successful");
            displayMessage(message, 'register-message'); // Прикажуваме порака за успех
            setTimeout(() => {
                toggleView('register-container', false); // Криеме формата за регистрација
                toggleView('login-container', true); // Прикажуваме ја формата за најава
                clearRegisterForm(); // Исчисти ја формата по успешна регистрација
            }, 2000);
        })
        .catch(error => {
            console.log("Registration error:", error);
            displayMessage(error, 'register-message'); // Прикажуваме порака за грешка
        });
});

// Функција за регистрација на нов корисник
function registerUser(firstname, lastname, email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!firstname || !lastname || !email || !password) {
                reject('All fields are required'); // Проверуваме дали сите полиња се пополнети
                return;
            }
            if (users.some(u => u.email === email)) {
                reject('Email already registered'); // Проверуваме дали е-поштата е веќе регистрирана
                return;
            }
            
            const newUser = { id: users.length + 1, email, firstname, lastname, password };
            users.push(newUser); // Додаваме нов корисник во листата
            console.log("New user registered:", newUser);
            resolve('Registration successful! Please log in.');
        }, 1000);
    });
}

// Функција за прикажување на пораки (грешки или известувања)
function displayMessage(message, elementId) {
    document.getElementById(elementId).innerText = message;
}

// Функција за менување на видливоста на делови од интерфејсот
function toggleView(elementId, show) {
    console.log("Toggling view:", elementId, "Show:", show);
    document.getElementById(elementId).classList.toggle('hidden', !show);

    // Ако ја отвораме формата за регистрација, исчисти ја пораката
    if (elementId === 'register-container' && show) {
        displayMessage('', 'register-message');
    }

    // Ако ја отвораме формата за најава, исчисти ја пораката за грешка
    if (elementId === 'login-container' && show) {
        displayMessage('', 'login-message');
    }
}

// Функција за чистење на полињата за регистрација
function clearRegisterForm() {
    document.getElementById('firstname').value = "";
    document.getElementById('lastname').value = "";
    document.getElementById('register-email').value = "";
    document.getElementById('register-password').value = "";
    displayMessage('', 'register-message'); // Бришење на пораката
}

// Функција за чистење на полињата за најава
function clearLoginForm() {
    document.getElementById('email').value = "";
    document.getElementById('password').value = "";
    displayMessage('', 'login-message'); // Бришење на пораката
}
