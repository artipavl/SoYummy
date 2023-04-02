// import axios from 'axios';
import recipes from './recipes/recipes.json';

export const getFavoriteRecipes = async () => {
  try {
    // const { data } = await axios.get();
    const data = recipes;
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteFavoriteRecipe = async id => {
  try {
    // const { data } = await axios.delete();
    // return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMyRecipes = async () => {
  try {
    // const { data } = await axios.get();
    const data = recipes;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteMyRecipe = async id => {
  try {
    // const { data } = await axios.delete();
    // return data;
  } catch (error) {
    console.log(error);
  }
};