import { readFile, writeFile } from "../services/files.service.js";

const User = {
    getUserById(id) {
        return {
            id,
            name: 'John Doe',
        };
    },

   async createUser(body) {
        const users = readFile('users.json');
        const newUser = {
            // name: body.name,
            // email: body.email,
            ...body,
            id: 1,
            createdAt: new Date().toISOString(),
        };

        users.push(newUser)

        writeFile('users.json', users);
        return newUser;
    },
};

export default User;