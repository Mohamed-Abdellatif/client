import { createSlice, createAsyncThunk, type PayloadAction, type ActionReducerMapBuilder } from '@reduxjs/toolkit';

// Mock async login function (replace with real API call)
export const login = createAsyncThunk(
  'auth/login',
  async (credentials: { username: string; password: string }) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Always succeed for now
    return { username: credentials.username };
  }
);

interface AuthState {
  isLoggedIn: boolean;
  user: null | { username: string };
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state: AuthState) {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<AuthState>) => {
    builder
      .addCase(login.pending, (state: AuthState) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state: AuthState, action: PayloadAction<{ username: string }>) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
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
