import express from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;
const HOSTNAME = 'localhost';

// Middleware to parse JSON bodies
app.use(express.json());

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to the books JSON file
const BOOKS_FILE_PATH = path.join(__dirname, 'data', 'books.json');

// GET /books - Get all books
app.get('/books', async (req, res) => {
  const { author, year } = req.query;

  let booksData = await fs.readFile(BOOKS_FILE_PATH, 'utf-8');
  const books = JSON.parse(booksData);

  let filteredBooks = books;

  if (author) {
    filteredBooks = filteredBooks.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
  }

  if (year) {
    filteredBooks = filteredBooks.filter(book => book.year === parseInt(year));
  }

  res.json(filteredBooks);
});

// GET /books/:id - Get book by id
app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  let books = await fs.readFile(BOOKS_FILE_PATH, 'utf-8');
  books = JSON.parse(books);

  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return res.status(404).send({ error: 'Book not found' });
  }

  res.json(book);
});

// POST /books - Add a new book
app.post('/books', async (req, res) => {
  const { title, author, year } = req.body;
  let books = await fs.readFile(BOOKS_FILE_PATH, 'utf-8');
  books = JSON.parse(books);

  const newBook = {
    id: books.length + 1,
    title,
    author,
    year
  };

  books.push(newBook);
  await fs.writeFile(BOOKS_FILE_PATH, JSON.stringify(books, null, 2));

  res.status(201).json(newBook);
});

// DELETE /books/:id - Delete book by id
app.delete('/books/:id', async (req, res) => {
  const { id } = req.params;
  let books = await fs.readFile(BOOKS_FILE_PATH, 'utf-8');
  books = JSON.parse(books);

  books = books.filter(b => b.id !== parseInt(id));

  await fs.writeFile(BOOKS_FILE_PATH, JSON.stringify(books, null, 2));

  res.status(204).send();
});

// GET /stats - Get statistics
app.get('/stats', async (req, res) => {
  let books = await fs.readFile(BOOKS_FILE_PATH, 'utf-8');
  books = JSON.parse(books);

  const totalBooks = books.length;

  const booksByAuthor = books.reduce((acc, book) => {
    acc[book.author] = (acc[book.author] || 0) + 1;
    return acc;
  }, {});

  const oldestBook = books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest), books[0]);
  const newestBook = books.reduce((newest, book) => (book.year > newest.year ? book : newest), books[0]);

  res.json({
    totalBooks,
    booksByAuthor,
    oldestBook,
    newestBook
  });
});

app.listen(PORT,HOSTNAME, () => {
  console.log(`Server is running at: http://${HOSTNAME}:${PORT}`);
});
