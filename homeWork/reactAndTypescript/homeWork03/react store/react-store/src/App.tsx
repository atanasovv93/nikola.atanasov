import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'

export default function App() {
  return (
    <div>
      <nav style={{ padding: '1rem', backgroundColor: '#eee' }}>
        <Link to="/" style={{ marginRight: '1rem' }}>Home</Link>
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  )
}
