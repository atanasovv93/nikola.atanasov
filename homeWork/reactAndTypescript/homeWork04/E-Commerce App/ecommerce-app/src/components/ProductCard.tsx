import { type Product } from '../services/api'

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', width: '200px' }}>
      <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
    </div>
  )
}
