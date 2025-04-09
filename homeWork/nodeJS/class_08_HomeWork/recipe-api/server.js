import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.config.js';
import recipeRoutes from './routes/recipeRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || 'localhost';

app.use(express.json());

// Routes
app.use('/recipes', recipeRoutes);

// Home route
app.get('/', (req, res) => {
  res.send('🍽️ Welcome to the Recipe API!');
});

// Connect to DB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://${HOSTNAME}:${PORT}`);
  });
});
