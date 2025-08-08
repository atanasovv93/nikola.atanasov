import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'

function App() {
  return (
    <Router>
      <nav style={{ display: 'flex', gap: '1rem', padding: '1rem', background: '#eee' }}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  )
}

export default App
