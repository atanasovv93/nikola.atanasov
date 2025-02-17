import { loginUser, registerUser } from './auth.js';
import { loadUsers, setLoggedInUser, getLoggedInUser, logoutUser } from './storage.js';
import { displayMessage } from './ui.js';

// DOM Elements
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const loginContainer = document.getElementById("login-container");
const registerContainer = document.getElementById("register-container");
const logoutBtn = document.getElementById('logout-btn');
const registerLink = document.getElementById("register-link");
const main = document.getElementById('main');
const backToLoginLink = document.getElementById("back-to-login");

(() => {
    loadUsers();
    
    const loggedInUser = getLoggedInUser();
    if (loggedInUser) {
        loginContainer.style.display = "none";
        main.style.display = "flex";
        displayMessage(`Welcome back ${loggedInUser.firstname}!`);
    }

    // Login Form
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        try {
            const user = await loginUser(
                document.getElementById('login-email').value,
                document.getElementById('login-password').value
            );
            loginContainer.style.display = "none";
            main.style.display = "flex";
            loginForm.reset();
            setLoggedInUser(user);
            displayMessage(`Welcome ${user.firstname}!`);
        } catch (error) {
            displayMessage(error.message, true);
        }
    });

    // Register Form
    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        try {
            const result = await registerUser(
                document.getElementById('register-firstname').value,
                document.getElementById('register-lastname').value,
                document.getElementById('register-email').value,
                document.getElementById('register-password').value
            );
            displayMessage(result.message);
            registerContainer.style.display = "none";
            loginContainer.style.display = "block";
            registerForm.reset();
        } catch (error) {
            displayMessage(error.message, true);
        }
    });

    // Navigation
    registerLink.addEventListener("click", () => {
        loginContainer.style.display = "none";
        registerContainer.style.display = "block";
    });

    backToLoginLink.addEventListener("click", () => {
        registerContainer.style.display = "none";
        loginContainer.style.display = "block";
    });

    // Logout
    logoutBtn.addEventListener('click', () => {
        logoutUser();
        loginForm.reset();
        registerForm.reset();
        loginContainer.style.display = "block";
        registerContainer.style.display = "none";
        main.style.display = "none";
        displayMessage('Logged out successfully!');
    });
})();
