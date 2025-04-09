import express from 'express';
import reminderRoutes from './routes/reminder.route.js';
import { connectDB } from './config/db.js';

const PORT = 3000;
const HOSTNAME = 'localhost';

// Init Server
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/reminders', reminderRoutes);

// Health Route ( for checking if the server is running properly)
app.get('/api/health', (req, res) => {
    res.send({ status: 'OK' });    
});

async function startServer() {
    try {
    app.listen(PORT, HOSTNAME, () => {
        console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
    });
} catch (error) {
    console.error('Server startup error: ', error);
}
}


startServer();



app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});
