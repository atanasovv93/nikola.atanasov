import axios from 'axios'

export interface Product {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

export const fetchAllProducts = () => {
  return axios.get<Product[]>('https://fakestoreapi.com/products')
}
