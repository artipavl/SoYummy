import { createSlice } from '@reduxjs/toolkit';

import { searchRecipes } from './searchOperations';

const initialState = {
  results: [],
  isError: false,
  isLoading: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  extraReducers: {
    [searchRecipes.fulfilled](state, action) {
      console.log(action.payload);
      state.results = action.payload;
    },
    [searchRecipes.pending](state, action) {
      state.isLoading = true;
    },
    [searchRecipes.rejected](state, action) {
      state.isError = action.payload;
      console.log(action.payload);
    },
  },
});

export const searchReducer = searchSlice.reducer;
