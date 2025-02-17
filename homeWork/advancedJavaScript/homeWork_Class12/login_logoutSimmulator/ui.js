import { loginUser, registerUser } from './auth.js';
import { getLoggedInUser, setLoggedInUser, logoutUser } from './storage.js';

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const loginContainer = document.getElementById("login-container");
const registerContainer = document.getElementById("register-container");
const messageDiv = document.getElementById('message');
const logoutBtn = document.getElementById('logout-btn');
const registerLink = document.getElementById("register-link");
const main = document.getElementById('main');
const backToLoginLink = document.getElementById("back-to-login");

export function displayMessage(message, isError = false) {
    messageDiv.style.display = "block";
    messageDiv.textContent = message;
    messageDiv.className = isError ? "error" : "success";
    setTimeout(() => {
        messageDiv.style.display = "none";
    }, 2000);
}

export function setupEventListeners() {
    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        try {
            const user = await loginUser(
                document.getElementById('login-email').value,
                document.getElementById('login-password').value
            );
            setLoggedInUser(user);
            loginContainer.style.display = "none";
            main.style.display = "block";
            displayMessage(`Welcome ${user.firstname}!`);
        } catch (error) {
            displayMessage(error.message, true);
        }
    });

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

    registerLink.addEventListener("click", () => {
        loginContainer.style.display = "none";
        registerContainer.style.display = "block";
    });

    backToLoginLink.addEventListener("click", () => {
        registerContainer.style.display = "none";
        loginContainer.style.display = "block";
    });

    logoutBtn.addEventListener('click', () => {
        logoutUser();
        loginContainer.style.display = "block";
        main.style.display = "none";
        loginForm.reset();
        
        displayMessage("Logged out successfully!");
    });
}
