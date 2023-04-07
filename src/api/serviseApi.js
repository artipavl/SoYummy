import axios from 'axios';

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
    const { data } = await axios.get(`/recipes/own-recipes?page=${page}&limit=${limit}`);
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