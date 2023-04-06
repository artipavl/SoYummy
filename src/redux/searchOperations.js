import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const searchRecipes = createAsyncThunk(
  'search/searchRecipes',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/search?title=${query}`);

      console.log(response.data.data.result);

      return response.data.data.result;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
