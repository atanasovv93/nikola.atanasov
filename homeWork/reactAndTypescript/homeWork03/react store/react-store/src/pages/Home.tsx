import { useEffect, useState } from 'react'
import { fetchCategories, fetchProductsByCategory, type Product } from '../services/api'
import ProductCard from '../components/ProductCard'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'

export default function Home() {
  const [categories, setCategories] = useState<string[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    fetchCategories()
      .then(res => setCategories(res.data))
      .catch(() => setError('Error loading categories'))
      .finally(() => setLoading(false))
  }, [])

  const handleCategoryClick = (category: string) => {
    setLoading(true)
    fetchProductsByCategory(category)
      .then(res => setProducts(res.data))
      .catch(() => setError('Error loading products'))
      .finally(() => setLoading(false))
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Welcome to React Store 🛍️</h1>
      <p>Click a category to view products</p>

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}

      <div style={{ marginBottom: '1rem' }}>
        {categories.map(cat => (
          <button key={cat} onClick={() => handleCategoryClick(cat)} style={{ marginRight: '0.5rem' }}>
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
