import { Router } from 'express';
import UserController from '../controller/user.controller.js';
import User from '../models/user.model.js';

const router = Router(); // Call the Router function to create a new router instance

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);
export default router;

