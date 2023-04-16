import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-api.onrender.com/api';

export const fetchDataCategoryList = createAsyncThunk(
  'categoryList/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/category-list`);
      return response.data.data.result;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const categorySlice = createSlice({
  name: 'categoryList',
  initialState: {
    dataList: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchDataCategoryList.pending](state) {
      state.isLoading = true;
    },
    [fetchDataCategoryList.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.dataList = action.payload;
    },
    [fetchDataCategoryList.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const tasksReducerCategoryList = categorySlice.reducer;
