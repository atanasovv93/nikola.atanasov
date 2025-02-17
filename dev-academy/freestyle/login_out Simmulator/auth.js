import { getUsers, saveUsers } from './storage.js';
import { User } from './user.js';

export async function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!email || !password) {
                reject({ message: "All fields are required" });
                return;
            }
            const userFound = getUsers().find(user => 
                user.email === email && user.password === password
            );
            userFound ? resolve(userFound) : reject({ message: "Invalid credentials" });
        }, 1000);
    });
}

export async function registerUser(firstname, lastname, email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!firstname || !lastname || !email || !password) {
                reject({ message: "All fields are required" });
                return;
            }
            if (getUsers().some(user => user.email === email)) {
                reject({ message: `User with ${email} already exists` });
                return;
            }
            const newUser = new User(firstname, lastname, email, password);
            getUsers().push(newUser);
            saveUsers();
            resolve({ message: "Registration successful!" });
        }, 1000);
    });
}
