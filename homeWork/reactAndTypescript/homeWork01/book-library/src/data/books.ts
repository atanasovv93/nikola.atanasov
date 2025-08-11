export interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  isRead: boolean;
}

export const books: Book[] = [
  { id: 1, title: '1984', author: 'George Orwell', year: 1949, isRead: true },
  { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937, isRead: false },
  { id: 3, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, isRead: true },
  { id: 4, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, isRead: false },
  { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, isRead: true },
];
