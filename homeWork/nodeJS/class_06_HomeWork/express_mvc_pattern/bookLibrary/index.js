import express from 'express';
import bookRoutes from './routes/book.routes.js';

const app = express();
const PORT = 3000;
const LHOST = 'localhost';

app.use(express.json());
app.use(bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://${LHOST}:${PORT}`);
});
