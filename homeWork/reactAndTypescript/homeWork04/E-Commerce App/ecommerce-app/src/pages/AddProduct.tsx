import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import axios from 'axios'

type FormValues = {
  title: string
  price: number
  description: string
  category: string
  image: string
}

export default function AddProduct() {
  const { register, handleSubmit, formState: { errors, isValid, isSubmitting }, reset } = useForm<FormValues>({
    mode: 'onChange'
  })

  const [categories, setCategories] = useState<string[]>([])
  const [submittedProduct, setSubmittedProduct] = useState<FormValues | null>(null)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    axios.get<string[]>('https://fakestoreapi.com/products/categories')
      .then(res => setCategories(res.data))
      .catch(() => setError('Failed to fetch categories'))
  }, [])

  const onSubmit = async (data: FormValues) => {
    setError(null)
    try {
      const res = await axios.post('https://fakestoreapi.com/products', data)
      setSuccess(true)
      setSubmittedProduct(res.data)
      reset()
    } catch {
      setError('Error submitting product')
    }
  }

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Add New Product</h1>

      {success && submittedProduct && (
        <div style={{ border: '1px solid green', padding: '1rem', marginBottom: '1rem' }}>
          <h3>✅ Product Created!</h3>
          <p><strong>Title:</strong> {submittedProduct.title}</p>
          <p><strong>Price:</strong> ${submittedProduct.price}</p>
          <p><strong>Category:</strong> {submittedProduct.category}</p>
          <img src={submittedProduct.image} alt={submittedProduct.title} width={100} />
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <input
          placeholder="Title"
          {...register('title', { required: true, minLength: 3 })}
        />
        {errors.title && <span style={{ color: 'red' }}>Title must be at least 3 characters</span>}

        <input
          type="number"
          placeholder="Price"
          {...register('price', { required: true, min: 0.01 })}
        />
        {errors.price && <span style={{ color: 'red' }}>Price must be a positive number</span>}

        <textarea
          placeholder="Description"
          {...register('description', { required: true, minLength: 10, maxLength: 500 })}
        />
        {errors.description && <span style={{ color: 'red' }}>Description must be between 10 and 500 characters</span>}

        <select {...register('category', { required: true })}>
          <option value="">-- Select category --</option>
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        {errors.category && <span style={{ color: 'red' }}>Category is required</span>}

        <input
          placeholder="Image URL"
          {...register('image', {
            required: true,
            pattern: {
              value: /^https?:\/\/.*\.(jpeg|jpg|png|gif|webp)$/,
              message: 'Must be a valid image URL'
            }
          })}
        />
        {errors.image && <span style={{ color: 'red' }}>{errors.image.message}</span>}

        <button type="submit" disabled={!isValid || isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Add Product'}
        </button>
      </form>
    </div>
  )
}
