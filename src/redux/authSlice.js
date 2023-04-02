import { createSlice } from '@reduxjs/toolkit';

import { register, login } from './authOperations';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  token: null,
  isError: null,
  isLoading: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      //   state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [register.pending](state, action) {
      state.isLoading = true;
    },
    [register.rejected](state, action) {
      state.isError = action.payload;
      state.isLoggedIn = false;
      state.isLoading = false;
    },

    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      //   state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [login.pending](state, action) {
      state.isLoading = true;
    },
    [login.rejected](state, action) {
      state.isError = action.payload;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
