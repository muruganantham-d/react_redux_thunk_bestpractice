import { createSlice } from '@reduxjs/toolkit';
import { Product } from './productTypes';
import {
  fetchProductsThunk,
  createProductThunk,
  updateProductThunk,
  deleteProductThunk,
} from './productThunks';

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
  currentProduct: Product | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
  currentProduct: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clearCurrentProduct(state) {
      state.currentProduct = null;
    },
  },
  extraReducers: builder => {
    // Common loading/error cases
    const handlePending = (state: ProductState) => {
      state.loading = true;
      state.error = null;
    };
    
    const handleRejected = (state: ProductState, action: any) => {
      state.loading = false;
      state.error = action.payload as string;
    };

    builder
      // Fetch Products
      .addCase(fetchProductsThunk.pending, handlePending)
      .addCase(fetchProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsThunk.rejected, handleRejected)
      
      // Create Product
      .addCase(createProductThunk.pending, handlePending)
      .addCase(createProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(createProductThunk.rejected, handleRejected)
      
      // Update Product
      .addCase(updateProductThunk.pending, handlePending)
      .addCase(updateProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.products.findIndex(p => p._id === action.payload._id);
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      .addCase(updateProductThunk.rejected, handleRejected)
      
      // Delete Product
      .addCase(deleteProductThunk.pending, handlePending)
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter(p => p._id !== action.payload);
      })
      .addCase(deleteProductThunk.rejected, handleRejected);
  },
});

export const { clearCurrentProduct } = productSlice.actions;
export default productSlice.reducer;