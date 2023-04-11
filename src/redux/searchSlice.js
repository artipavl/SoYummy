import { createSlice } from '@reduxjs/toolkit';

import { searchRecipes, searchIngredient } from './searchOperations';

const initialState = {
  results: [],
  status: 'idle',
  searchType: 'title',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  extraReducers: {
    [searchRecipes.fulfilled](state, action) {
      state.results = action.payload;
      state.status = 'resolved';
    },
    [searchRecipes.pending](state) {
      state.status = 'loading';
    },
    [searchRecipes.rejected](state) {
      state.status = 'error';
    },

    [searchIngredient.fulfilled](state, action) {
      state.results = action.payload;
      state.status = 'resolved';
    },
    [searchIngredient.pending](state) {
      state.status = 'loading';
    },
    [searchIngredient.rejected](state) {
      state.status = 'error';
    },
  },

  reducers: {
    changeSearchType(state, action) {
      state.searchType = action.payload;
    },
  },
});

export const { changeSearchType } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
