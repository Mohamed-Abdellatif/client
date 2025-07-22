import { createSlice, createAsyncThunk, type PayloadAction, type ActionReducerMapBuilder } from '@reduxjs/toolkit';
import type { AuthState } from '../../../types';
import { auth } from '../../../services/api';

// Mock async login function 
export const login = createAsyncThunk(
  'auth/login',
  async ({email,password}: { email: string; password: string }) => {
    const token = await auth.login({email,password});
    localStorage.setItem('token', token);
    return token;
  }
);

const initialState: AuthState & { token?: string | null } = {
  isLoggedIn: !!localStorage.getItem('token'),
  user: null,
  loading: false,
  error: null,
  token: localStorage.getItem('token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state: AuthState & { token?: string | null }) {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
      state.token = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<AuthState>) => {
    builder
      .addCase(login.pending, (state: AuthState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state: AuthState & { token?: string | null }, action: PayloadAction<any>) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user || null;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(login.rejected, (state: AuthState, action: ReturnType<typeof login.rejected>) => {
        state.loading = false;
        state.error = action.error?.message || 'Login failed';
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
