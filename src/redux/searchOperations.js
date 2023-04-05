import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const searchRecipes = createAsyncThunk(
  'search/searchRecipes',
  async ({ recipe }, thunkAPI) => {
    console.log(recipe);
    try {
      const response = await axios.get(`/recipes/searchByIngredient`);

      console.log(response.data.data);

      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
