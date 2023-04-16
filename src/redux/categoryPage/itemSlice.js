import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-api.onrender.com/api';

export const fetchDataCategoryItem = createAsyncThunk(
  'categoryItem/fetchAll',
  async ({ nameEl, page = 1 }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/recipes/list/${nameEl}?page=${page}&limit=8`
      );
      return response.data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const itemSlice = createSlice({
  name: 'categoryItem',
  initialState: {
    dataItem: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchDataCategoryItem.pending](state) {
      state.isLoading = true;
    },
    [fetchDataCategoryItem.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.dataItem = action.payload;
    },
    [fetchDataCategoryItem.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const tasksReducerCategoryItem = itemSlice.reducer;
