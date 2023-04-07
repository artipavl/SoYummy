import { createSlice } from '@reduxjs/toolkit';

import { searchRecipes, searchIngredient } from './searchOperations';

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
      state.results = action.payload;
    },
    [searchRecipes.pending](state, action) {
      state.isLoading = true;
    },
    [searchRecipes.rejected](state, action) {
      state.isError = true;
    },

    [searchIngredient.fulfilled](state, action) {
      state.results = action.payload;
    },
    [searchIngredient.pending](state, action) {
      state.isLoading = true;
    },
    [searchIngredient.rejected](state, action) {
      state.isError = true;
    },
  },
});

export const searchReducer = searchSlice.reducer;
