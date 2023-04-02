import { createSlice } from '@reduxjs/toolkit';

import { register } from './authOperations';

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
    },
    [register.pending](state, action) {},
    [register.rejected](state, action) {
      state.isError = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
