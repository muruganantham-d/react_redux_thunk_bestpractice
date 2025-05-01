import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginApi, signupApi } from './authApi'; 

import { LoginPayload, LoginResponse } from './authTypes';

export const loginThunk = createAsyncThunk<LoginResponse, LoginPayload>(
  'auth/login',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await loginApi(payload.email, payload.password); 
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Something went wrong');
    }
  }
);

export const signupThunk = createAsyncThunk<LoginResponse, { name: string; email: string; password: string }>(
  'auth/signup',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await signupApi(payload);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Signup failed');
    }
  }
);
