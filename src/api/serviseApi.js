import axios from 'axios';

axios.defaults.baseURL = 'https://so-yummy-api.onrender.com/api';

export const getFavoriteRecipes = async page => {
  try {
    const { data } = await axios.get(`/favorites?page=${page}&limit=4`);
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

export const getMyRecipes = async page => {
  try {
    const { data } = await axios.get(
      `/recipes/own-recipes?page=${page}&limit=4`
    );
    return data.data;
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

export const getPopularRecipes = async () => {
  try {
    const { data } = await axios.get(`/recipes/popular-recipe`);
    return data.data.result;
  } catch (error) {
    console.log(error);
  }
};

//!                  Add Recipe component
export const getAllCategories = async () => {
  try {
    const { data } = await axios.get('/recipes/category-list');
    const { result } = await data.data;
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

export const getAllIngredients = async () => {
  try {
    const { data } = await axios.get('/recipes/ingredients');
    const { result } = await data.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getCategoryList = async (e, page = 1, limit = 8) => {
  try {
    const { data } = await axios.get(
      `/recipes/list/${e}?page=${page}&limit=${limit}`
    );
    const result = data.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const addRecipe = async credentials => {
  try {
    const response = await axios.post('/recipes/own-recipes', credentials);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getVerificationUser = async id => {
  const { data } = await axios.get(`/users/verify/${id}`);
  return data.data;
};

export const getSearchRecipes = async (query, page) => {
  const { data } = await axios.get(
    `/recipes/search?title=${query}&page=${page}&limit=12`
  );

  return data;
};

export const getSearchIngredients = async (query, page) => {
  const { data } = await axios.get(
    `/recipes/search?ingredient=${query}&page=${page}&limit=12`
  );

  return data;
};
