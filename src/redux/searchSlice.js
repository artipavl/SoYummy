import { createSlice } from '@reduxjs/toolkit';

import { searchRecipes, searchIngredient } from './searchOperations';

const initialState = {
  results: [],
  status: 'idle',
  searchType: 'title',
  isPageLoading: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  extraReducers: {
    [searchRecipes.fulfilled](state, action) {
      state.results = action.payload;
      state.isPageLoading = false;
      state.status = 'resolved';
    },
    [searchRecipes.pending](state) {
      state.isPageLoading = true;
      state.status = 'loading';
    },
    [searchRecipes.rejected](state) {
      state.isPageLoading = false;
      state.status = 'error';
    },

    [searchIngredient.fulfilled](state, action) {
      state.results = action.payload;
      state.isPageLoading = false;
      state.status = 'resolved';
    },
    [searchIngredient.pending](state) {
      state.isPageLoading = true;
      state.status = 'loading';
    },
    [searchIngredient.rejected](state) {
      state.isPageLoading = false;
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
