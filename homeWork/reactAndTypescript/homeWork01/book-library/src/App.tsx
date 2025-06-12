import Header from './components/Header';
import BookList from './components/BookList';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  const username = 'Goran';
  const booksCount = 5;

  return (
    <div>
      <Header title="My Book Library" username={username} />
      <BookList />
      <Counter count={booksCount} />
      <Footer />
    </div>
  );
}

export default App;
