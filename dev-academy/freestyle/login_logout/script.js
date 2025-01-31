    // Листа на корисници (моментално содржи еден тест-корисник)
    const users = [
      { id: 1, email: 'test@example.com', firstname: 'John', lastname: 'Doe', password: '1234' }
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
          }, 2000);
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
  }
