const users = [
  { id: 1, email: 'john.doe@example.com', firstname: 'John', lastname: 'Doe', password: 'password123' },
  { id: 2, email: 'jane.smith@example.com', firstname: 'Jane', lastname: 'Smith', password: 'mypassword' }
];

// Event listener за логирање
document.getElementById('login-button').addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  simulateApiRequest(email, password)
    .then(user => {
      displayMessage(`Welcome back, ${user.firstname}!`, 'login-message');
      toggleVisibility('login-container', false);
      toggleVisibility('register-prompt', false);
      toggleVisibility('logout-button', true);
      setTimeout(() => {
        clearMessage('login-message');
      }, 2000);
    })
    .catch(error => {
      displayMessage(error, 'login-message');
    });
});

// Симулирана API функција за логирање
function simulateApiRequest(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(u => u.email === email && u.password === password);
      console.log('User found:', user); // Проверете дали корисникот е пронајден
      if (user) {
        resolve(user);
      } else {
        reject('Invalid credentials');
      }
    }, 2000);
  });
}

// Event listener за одлогирање
document.getElementById('logout-button').addEventListener('click', () => {
  toggleVisibility('login-container', true);
  toggleVisibility('register-prompt', true);
  toggleVisibility('logout-button', false);
});

// Event listener за прикажување на формата за регистрација
document.getElementById('register-link').addEventListener('click', () => {
  toggleVisibility('login-container', false);
  toggleVisibility('register-container', true);
  toggleVisibility('register-prompt', false);
});

// Event listener за регистрација
document.getElementById('register-button').addEventListener('click', () => {
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  simulateRegisterRequest(firstname, lastname, email, password)
    .then(message => {
      displayMessage(message, 'register-message');
      toggleVisibility('register-container', false);
      toggleVisibility('login-container', true);
      toggleVisibility('register-prompt', true);
      setTimeout(() => {
        clearMessage('register-message');
      }, 2000);
    })
    .catch(error => {
      displayMessage(error, 'register-message');
    });
});

// Симулирана API функција за регистрација
function simulateRegisterRequest(firstname, lastname, email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!firstname || !lastname || !email || !password) {
        reject('All fields are required');
      } else {
        const newUser = { id: users.length + 1, email, firstname, lastname, password };
        users.push(newUser);
        console.log('New user registered:', newUser); // Проверете дали новиот корисник е додаден
        console.log('All users:', users); // Испечати ги сите корисници
        resolve('Registration successful! Please log in.');
      }
    }, 1000);
  });
}

// Помошни функции
function displayMessage(message, elementId) {
  document.getElementById(elementId).innerText = message;
}

function clearMessage(elementId) {
  document.getElementById(elementId).innerText = '';
}

function toggleVisibility(elementId, isVisible) {
  document.getElementById(elementId).style.display = isVisible ? 'block' : 'none';
}
