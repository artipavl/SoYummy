import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-api.onrender.com/api';

export const fetchDataMain = createAsyncThunk(
  'main/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/recipes/main-page');
      return response.data.data.result;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const mainPageSlice = createSlice({
  name: 'main',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchDataMain.pending](state) {
      state.isLoading = true;
    },
    [fetchDataMain.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchDataMain.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const tasksReducerMain = mainPageSlice.reducer;
