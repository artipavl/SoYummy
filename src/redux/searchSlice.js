import { createSlice } from '@reduxjs/toolkit';

import { searchRecipes } from './searchOperations';

const initialState = {
  filter: '',
  ingredients: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  extraReducers: {
    [searchRecipes.fulfilled](state, action) {
      console.log(state.filter);
      console.log(action.payload);
    },
    [searchRecipes.pending](state, action) {},
    [searchRecipes.rejected](state, action) {
      console.log(action.payload);
    },
  },
});

export const searchReducer = searchSlice.reducer;
