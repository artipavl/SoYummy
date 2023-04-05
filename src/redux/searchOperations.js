import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const searchRecipes = createAsyncThunk(
  'search/searchRecipes',
  async (_, thunkAPI) => {
    const response = await axios.get('/recipes/search/:title');

    console.log(response.data);

    return response.data;
  }
);
