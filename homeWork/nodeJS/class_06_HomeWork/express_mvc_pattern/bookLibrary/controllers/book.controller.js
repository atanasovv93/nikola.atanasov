import BookModel from '../models/book.model.js';

export const getAllBooks = async (req, res) => {
  const books = await BookModel.getAllBooks();
  res.json(books);
};

export const getBookById = async (req, res) => {
  const book = await BookModel.getBookById(req.params.id);
  if (!book) return res.status(404).json({ error: 'Book not found' });
  res.json(book);
};

export const addBook = async (req, res) => {
  const { title, author, year, genre } = req.body;
  if (!title || !author || !year || !genre) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const newBook = await BookModel.addBook({ title, author, year, genre });
  res.status(201).json(newBook);
};

export const updateBook = async (req, res) => {
  const updatedBook = await BookModel.updateBook(req.params.id, req.body);
  if (!updatedBook) return res.status(404).json({ error: 'Book not found' });

  res.json(updatedBook);
};

export const deleteBook = async (req, res) => {
  const success = await BookModel.deleteBook(req.params.id);
  if (!success) return res.status(404).json({ error: 'Book not found' });

  res.status(204).send();
};

export const addReview = async (req, res) => {
  const { rating, comment, reviewer } = req.body;
  if (!rating || !comment || !reviewer) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const book = await BookModel.addReview(req.params.id, { rating, comment, reviewer });
  if (!book) return res.status(404).json({ error: 'Book not found' });

  res.status(201).json(book);
};
