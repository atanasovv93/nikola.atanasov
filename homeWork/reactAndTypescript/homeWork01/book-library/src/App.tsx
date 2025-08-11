import Header from './components/Header/Header';
import BookList from './components/BookList/BookList';
import Footer from './components/Footer/Footer';
import Counter from './components/Counter/Counter';

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
