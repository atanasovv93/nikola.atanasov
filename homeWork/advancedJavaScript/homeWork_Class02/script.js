const usersContainer = document.getElementById('users');

// Function to fetch users
function fetchUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        });
}

// Function to display users
function displayUsers(users) {
    users.forEach((user) => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
            <h3>${user.name}</h3>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
        `;
        usersContainer.appendChild(userDiv);
    });
    // console.log(users);
}

// Fetch and process the data
fetchUsers()
    .then((data) => {
        displayUsers(data);
    })
    .catch((error) => {
        usersContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    });

