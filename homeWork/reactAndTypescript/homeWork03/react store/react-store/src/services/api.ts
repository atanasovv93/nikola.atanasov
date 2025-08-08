import axios from 'axios'

const BASE_URL = 'https://fakestoreapi.com'

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}


export const fetchCategories = () => axios.get<string[]>(`${BASE_URL}/products/categories`)
export const fetchAllProducts = () => axios.get<Product[]>(`${BASE_URL}/products`)
export const fetchProductsByCategory = (category: string) =>
  axios.get<Product[]>(`${BASE_URL}/products/category/${category}`)
