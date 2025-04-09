import express from 'express';
import {
  getAllBooks, getBookById, addBook, updateBook, deleteBook, addReview
} from '../controllers/book.controller.js';

const router = express.Router();

router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.post('/books', addBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);
router.post('/books/:id/reviews', addReview);

export default router;
