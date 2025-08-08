import { useEffect, useState } from 'react'
import { fetchAllProducts, type Product } from '../services/api'
import ProductCard from '../components/ProductCard'
import LoadingSpinner from '../components/LoadingSpinner'
import ErrorMessage from '../components/ErrorMessage'

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchAllProducts()
      .then(res => setProducts(res.data))
      .catch(() => setError('Error loading all products'))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div style={{ padding: '1rem' }}>
      <h1>All Products</h1>

      {loading && <LoadingSpinner />}
      {error && <ErrorMessage message={error} />}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
