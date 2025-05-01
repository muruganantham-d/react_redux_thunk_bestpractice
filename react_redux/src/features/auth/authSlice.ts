import { createSlice } from '@reduxjs/toolkit';
import { loginThunk, signupThunk } from './authThunks';
import { AuthState } from './authTypes';

const initialState: AuthState = {
  user: null,
  token: '',
  loading: false,
  error: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = '';
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN THUNK
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })

      // SIGNUP THUNK
      .addCase(signupThunk.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(signupThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
      })
      .addCase(signupThunk.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
