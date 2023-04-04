import axios from 'axios';
import recipes from './recipes/recipes.json';

export const getFavoriteRecipes = async () => {
  try {
    return recipes;
    // const { data } = await axios.get(`/favorites`);
    // return data.data.result;
  } catch (error) {
    console.log(error);
  }
};

export const deleteFavoriteRecipe = async id => {
  try {
    const { data } = await axios.delete(`/favorites/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMyRecipes = async () => {
  try {
    return recipes;
    // const { data } = await axios.get(`/recipes/own-recipes`);
    // return data.data.result;
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