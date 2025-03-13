import express from 'express';
import userRouter from './routes/user.routes.js';

// Define the const
const PORT = 3000;
const HOSTNAME = 'localhost';

// Initializing the server
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRouter);

// Starting the Server
app.listen(PORT, HOSTNAME, () => {
    console.log(`Server started listening on: http://${HOSTNAME}:${PORT}`);
});