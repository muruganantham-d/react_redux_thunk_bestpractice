import axios from 'axios';
import { Product } from './productTypes';

const BASE_URL = 'http://localhost:5000/api/products';

// Create axios instance with default config
const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for auth tokens if needed
api.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await api.get('/');
  return response.data;
};

export const createProduct = async (product: Omit<Product, '_id'>): Promise<Product> => {
  const response = await api.post('/', product);
  return response.data;
};

export const updateProduct = async (id: string, product: Partial<Product>): Promise<Product> => {
  const response = await api.put(`/${id}`, product);
  return response.data;
};

export const deleteProduct = async (id: string): Promise<void> => {
  await api.delete(`/${id}`);
};

export const getProductById = async (id: string): Promise<Product> => {
  const response = await api.get(`/${id}`);
  return response.data;
};