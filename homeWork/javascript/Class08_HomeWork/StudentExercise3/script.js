const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const registerButton = document.getElementById('register-btn');
const outputParagraph = document.getElementById('output');

function createUserString(firstName, lastName, email, password) {
    return `User Registered: 
    Name: ${firstName} ${lastName}
    Email: ${email}
    Password: ${'*'.repeat(password.length)}`;
}

registerButton.addEventListener('click', () => {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (firstName && lastName && email && password) {
        const userString = createUserString(firstName, lastName, email, password);
        outputParagraph.textContent = userString;
    } else {
        outputParagraph.textContent = 'Please fill out all fields.';
    }
});
