import { createAsyncThunk } from '@reduxjs/toolkit';
import type { AxiosError } from 'axios'; 
import * as api from './productApi';
import { Product } from './productTypes';

// Type for API error response
interface ApiError {
  message: string;
  // Add other possible error response fields if needed
}

export const fetchProductsThunk = createAsyncThunk(
  'products/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await api.fetchProducts();
    } catch (error) {
      const err = error as AxiosError<ApiError>;
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch products');
    }
  }
);

export const createProductThunk = createAsyncThunk(
  'products/create',
  async (product: Omit<Product, '_id'>, { rejectWithValue }) => {
    try {
      return await api.createProduct(product);
    } catch (error) {
      const err = error as AxiosError<ApiError>;
      return rejectWithValue(err.response?.data?.message || 'Failed to create product');
    }
  }
);

export const updateProductThunk = createAsyncThunk(
  'products/update',
  async ({ id, data }: { id: string; data: Partial<Product> }, { rejectWithValue }) => {
    try {
      return await api.updateProduct(id, data);
    } catch (error) {
      const err = error as AxiosError<ApiError>;
      return rejectWithValue(err.response?.data?.message || 'Failed to update product');
    }
  }
);

export const deleteProductThunk = createAsyncThunk(
  'products/delete',
  async (id: string, { rejectWithValue }) => {
    try {
      await api.deleteProduct(id);
      return id;
    } catch (error) {
      const err = error as AxiosError<ApiError>;
      return rejectWithValue(err.response?.data?.message || 'Failed to delete product');
    }
  }
);