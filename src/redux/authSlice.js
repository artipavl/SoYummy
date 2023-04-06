import { createSlice } from '@reduxjs/toolkit';

import { register, login, fetchCurrentUser } from './authOperations';

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  token: null,
  isError: false,
  isLoading: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      //   state.isLoading = false;
    },
    [register.pending](state, action) {
      //   state.isLoading = true;
    },
    [register.rejected](state, action) {
      state.isError = true;
      state.isLoggedIn = false;
      //   state.isLoading = false;
    },

    [login.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      //   state.isLoading = false;
    },
    [login.pending](state, action) {
      //   state.isLoading = true;
    },
    [login.rejected](state, action) {
      state.isError = true;
      state.isLoggedIn = false;
      //   state.isLoading = false;
    },

    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    [fetchCurrentUser.pending](state) {},
    [fetchCurrentUser.rejected](state, action) {
      state.isError = true;
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
