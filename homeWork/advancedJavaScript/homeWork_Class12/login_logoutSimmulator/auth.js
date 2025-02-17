import { getUsers, saveUsers, setLoggedInUser } from './storage.js';

export async function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const users = getUsers();
            const userFound = users.find(user => user.email === email && user.password === password);
            userFound ? resolve(userFound) : reject({ message: "Invalid credentials" });
        }, 1000);
    });
}

export async function registerUser(firstname, lastname, email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let users = getUsers();
            if (users.some(user => user.email === email)) {
                reject({ message: `User with email ${email} already exists` });
                return;
            }
            const newUser = { firstname, lastname, email, password };
            users.push(newUser);
            saveUsers(users);
            resolve({ message: "Registration successful!" });
        }, 1000);
    });
}
