import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BOOKS_FILE_PATH = path.join(__dirname, '../data/books.json');

class BookModel {
  static async getAllBooks() {
    const data = await fs.readFile(BOOKS_FILE_PATH, 'utf-8');
    return JSON.parse(data);
  }

  static async getBookById(id) {
    const books = await this.getAllBooks();
    return books.find(book => book.id === parseInt(id)) || null;
  }

  static async addBook({ title, author, year, genre }) {
    const books = await this.getAllBooks();
    const newBook = {
      id: books.length + 1,
      title: title.trim(),
      author: author.trim(),
      year,
      genre: genre.trim(),
      reviews: []
    };
    books.push(newBook);
    await fs.writeFile(BOOKS_FILE_PATH, JSON.stringify(books, null, 2));
    return newBook;
  }

  static async updateBook(id, updates) {
    let books = await this.getAllBooks();
    const index = books.findIndex(book => book.id === parseInt(id));
    if (index === -1) return null;

    books[index] = { ...books[index], ...updates };
    await fs.writeFile(BOOKS_FILE_PATH, JSON.stringify(books, null, 2));
    return books[index];
  }

  static async deleteBook(id) {
    let books = await this.getAllBooks();
    const filteredBooks = books.filter(book => book.id !== parseInt(id));
    if (filteredBooks.length === books.length) return false;

    await fs.writeFile(BOOKS_FILE_PATH, JSON.stringify(filteredBooks, null, 2));
    return true;
  }

  static async addReview(id, review) {
    let books = await this.getAllBooks();
    const book = books.find(book => book.id === parseInt(id));
    if (!book) return null;

    book.reviews.push(review);
    await fs.writeFile(BOOKS_FILE_PATH, JSON.stringify(books, null, 2));
    return book;
  }
}

export default BookModel;
