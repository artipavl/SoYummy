import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://so-yummy-api.onrender.com/api';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('/users/register', credentials);

      return response.data.data.user;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', { email, password });

      token.set(response.data.data.user.token);

      return response.data.data.user;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
      }
      token.set(persistedToken);

      const response = await axios.get('/users/current');

      return response.data.data.user;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchUserLogout = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
      }
      token.set(persistedToken);

      await axios.post('/users/logout');
      token.set('');
      return true;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const themeSwicher = createAsyncThunk('auth/theme', () => {});

export const updateUser = createAsyncThunk(
  'auth/update-user',
  async (formData, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
      }
      token.set(persistedToken);
      console.log(formData);
      const response = await axios.patch('/users/update-user', formData);

      return response.data.data.user;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const subscribeUser = createAsyncThunk(
  'auth/subscribe',
  async (email, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
      }
      token.set(persistedToken);

      const response = await axios.post('/users/subscribe', email);

      return response.data.data.user;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const removeIngredient = createAsyncThunk(
  'auth/removeIngredient',
  async (body, thunkAPI) => {
    try {
      const response = await axios.patch('/users/shoping-list', body);

      return response.data.data.result;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addIngredient = createAsyncThunk(
  'auth/addIngredient',
  async (body, thunkAPI) => {
    try {
      const response = await axios.post('/users/shoping-list', body);

      return response.data.data.result;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

