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
  addIngredient,
  removeIngredient,
  getShoppingList,
} from './authOperations';

const initialState = {
  user: {
    id: '',
    name: '',
    email: '',
    avatarURL: '',
    shoppingList: [],
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
      const { name, email, avatarURL, token, _id, shoppingList } =
        action.payload;

      state.user = { name, email, avatarURL, id: _id, shoppingList };
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
      const { name, email, avatarURL, _id, shoppingList } = action.payload;

      state.user = { name, email, avatarURL, id: _id, shoppingList };
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

    [addIngredient.fulfilled](state, action) {
      state.user.shoppingList = action.payload;
    },
    [addIngredient.rejected](state, action) {
      state.isError = action.payload;
    },

    [removeIngredient.fulfilled](state, action) {
      state.user.shoppingList = action.payload;
    },
    [removeIngredient.rejected](state, action) {
      state.isError = action.payload;
    },

    [getShoppingList.fulfilled](state, action) {
      state.user.shoppingList = action.payload;
    },
    [getShoppingList.rejected](state, action) {
      state.isError = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
