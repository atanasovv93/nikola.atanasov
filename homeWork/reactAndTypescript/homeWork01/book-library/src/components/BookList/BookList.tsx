import React from "react";
import './BookList.css';
import { books, type Book } from '../../data/books';

const BookList: React.FC = () => {
  return (
    <div className="book-list">
      {books.map((book: Book) => (
        <div key={book.id} className={`book-card ${book.isRead ? 'read' : 'unread'}`}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Year: {book.year}</p>
          <p>Status: {book.isRead ? '✅ Read' : '📖 For Reading'}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
