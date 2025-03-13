import User from '../models/user.model.js';

const UserController = { 
 getAllUsers(req, res) {
    res.send('request to route user was invoked')
 },
 getUserById(req, res) {
    const {
        params: { id },
    } = req;

    const user = User.getUserById(id);

    res.send(user);
 },
 async createUser(req, res) {
    const { body } = req;

    User.createUser(body);

    res.send(user);
 },
};

export default UserController;