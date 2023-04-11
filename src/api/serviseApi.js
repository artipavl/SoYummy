import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-api.onrender.com/api';

export const getFavoriteRecipes = async (page = 1, limit = 4) => {
  try {
    const { data } = await axios.get(`/favorites?page=${page}&limit=${limit}`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteFavoriteRecipe = async id => {
  try {
    const { data } = await axios.put(`/favorites/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMyRecipes = async (page = 1, limit = 4) => {
  try {
    const { data } = await axios.get(
      `/recipes/own-recipes?page=${page}&limit=${limit}`
    );
    return data.data.result;
  } catch (error) {
    console.log(error);
  }
};

export const deleteMyRecipe = async id => {
  try {
    const { data } = await axios.delete(`/recipes/own-recipes/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

//!                  Shopping List component
export const getShoppingList = async () => {
  try {
    const { data } = await axios.get(`/users/shopping-list`);
    return data.data.result;
  } catch (error) {
    console.log(error);
  }
};

export const deleteShoppingList = async _id => {
  try {
    const response = await axios.patch(`/users/shopping-list`, { _id });
    if (response.status === 200) {
      return response.data.data.result;
    } else {
      throw new Error('Server returned an error');
    }
  } catch (error) {
    console.log('error.message: ', error.message);
  }
};

export const getMainPage = async () => {
  try {
    const { data } = await axios.get(`/recipes/main-page`);
    const result = data.data.result;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryPage = async () => {
  try {
    const { data } = await axios.get(`/recipes/category-list`);
    const result = data.data.result;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryList = async e => {
  try {
    const { data } = await axios.get(`/recipes/list/${e}`);
    const result = data.data.result;
    return result;
  } catch (error) {
    console.log(error);
  }
};
