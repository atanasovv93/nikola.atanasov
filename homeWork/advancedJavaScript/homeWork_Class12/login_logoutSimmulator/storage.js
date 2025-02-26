export function initializeUsers() {
    if (!localStorage.getItem("users")) {
        const defaultUsers = [
            { firstname: "Frank", lastname: "Lampard", email: "cfc_legend@cfc.com", password: "legend" },
            { firstname: "Ashley", lastname: "Cole", email: "a.cole@cfc.com", password: "legend" },
            { firstname: "Didier", lastname: "Drogba", email: "didier@cfc.com", password: "legend" }
        ];
        localStorage.setItem("users", JSON.stringify(defaultUsers));
    }
}

export function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

export function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

export function setLoggedInUser(user) {
    localStorage.setItem("loggedUser", JSON.stringify(user));
}

export function getLoggedInUser() {
    return JSON.parse(localStorage.getItem("loggedUser"));
}

export function logoutUser() {
    localStorage.removeItem("loggedUser");z
}
