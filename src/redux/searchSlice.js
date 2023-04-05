import { createSlice } from '@reduxjs/toolkit';

import { searchRecipes } from './searchOperations';

const initialState = {
  ingredients: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  extraReducers: {
    [searchRecipes.fulfilled](state, action) {
      console.log(action.payload);
    },
    [searchRecipes.pending](state, action) {},
    [searchRecipes.rejected](state, action) {
      console.log(action.payload);
    },
  },
});

export const searchReducer = searchSlice.reducer;
