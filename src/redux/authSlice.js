import { createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';

import {
  register,
  login,
  fetchCurrentUser,
  fetchUserLogout,
  themeSwicher,
  updateUser,
  subscribeUser,
} from './authOperations';

const initialState = {
  user: {
    name: '',
    email: '',
    avatarURL: '',
  },
  theme: 'light',
  token: null,
  isError: false,
  isLoading: false,
  isLoggedIn: false,
  isUpdatingUser: false,
  isSubscribed: false,
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
    [register.pending](state) {
      state.isLoading = true;
    },
    [register.rejected](state) {
      state.isError = true;
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
    [login.pending](state) {
      state.isLoading = true;
    },
    [login.rejected](state) {
      state.isError = true;
      state.isLoggedIn = false;
      state.isLoading = false;
      Notiflix.Notify.failure('There is no user with such credentials.');
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
    [fetchCurrentUser.rejected](state) {
      state.isError = true;
      state.isLoggedIn = false;
      state.isLoading = false;
    },

    [fetchUserLogout.fulfilled](state) {
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

    [themeSwicher.fulfilled](state) {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },

    // themeSwicher: (state, action) => {
    //   state.theme = state.theme === "light" ? "dark" : "light";
    // },
    [updateUser.fulfilled](state, action) {
      const { name, avatarURL } = action.payload;

      state.user = { ...state.user, name, avatarURL };
      state.isError = null;
      state.isLoading = false;
      state.isUpdatingUser = true;
    },
    [updateUser.pending](state) {
      state.isLoading = true;
    },
    [updateUser.rejected](state, action) {
      state.isError = action.payload;
      state.isLoading = false;
    },
    [subscribeUser.fulfilled](state) {
      state.isError = null;
      state.isLoading = false;
      state.isSubscribed = true;
    },
    [subscribeUser.pending](state) {
      state.isLoading = true;
    },
    [subscribeUser.rejected](state, action) {
      state.isError = action.payload;
      state.isLoading = false;
    },
  },
});

export const authReducer = authSlice.reducer;

// export const { themeSwicher } = authSlice.actions;
