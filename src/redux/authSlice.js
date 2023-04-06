import { createSlice } from '@reduxjs/toolkit';

import {
  register,
  login,
  fetchCurrentUser,
  fetchUserLogout,
} from './authOperations';

const initialState = {
  user: {
    name: '',
    email: '',
    avatarURL: '',
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
      const { name, email, avatarURL } = action.payload;
      state.user = { name, email, avatarURL };
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
      const { name, email, avatarURL, token } = action.payload;

      state.user = { name, email, avatarURL };
      state.token = token;
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

    [fetchCurrentUser.fulfilled](state, action) {
      const { name, email, avatarURL } = action.payload;

      state.user = { name, email, avatarURL };
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [fetchCurrentUser.pending](state) {
      state.isLoading = true;
    },
    [fetchCurrentUser.rejected](state, action) {
      state.isError = action.payload;
      state.isLoggedIn = false;
      state.isLoading = false;
    },

    [fetchUserLogout.fulfilled](state, action) {
      // state = initialState;
      state.user = initialState.user;
      state.token = null;
      state.isError = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [fetchUserLogout.pending](state) {
      state.isLoading = true;
    },
    [fetchUserLogout.rejected](state, action) {
      state.isError = action.payload;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;
