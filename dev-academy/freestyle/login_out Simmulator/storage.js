import { User } from './user.js';

let users = [];

export function loadUsers() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        users = JSON.parse(storedUsers).map(user => 
            new User(user.firstname, user.lastname, user.email, user.password)
        );
    } else {
        users = [
            new User('Frank', 'Lampard', 'cfc_legend@cfc.com', 'london'),
            new User('Ashley', 'Cole', 'a.cole@cfc.com', 'rightfoot')
        ];
        saveUsers();
    }
}

export function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}

export function getUsers() {
    return users;
}

export function setLoggedInUser(user) {
    localStorage.setItem("loggedUser", JSON.stringify(user));
}

export function getLoggedInUser() {
    return JSON.parse(localStorage.getItem("loggedUser"));
}

export function logoutUser() {
    localStorage.removeItem("loggedUser");
}
