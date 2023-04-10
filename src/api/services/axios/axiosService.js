import axios from 'axios';

export const getRecipeById = async id => {
  return await axios.get(`https://so-yummy-api.onrender.com/api/recipes/${id}`);
};

export const getOwnRecipes = async () => {
  return await axios.get(
    `https://so-yummy-api.onrender.com/api/recipes/own-recipes`
  );
};

export const getFavorites = async () => {
  return await axios.get(`https://so-yummy-api.onrender.com/api/favorites`);
};

export const addToFavorites = async id => {
  return await axios.patch(
    `https://so-yummy-api.onrender.com/api/favorites/${id}`
  );
};

export const removeFromFavorites = async id => {
  return await axios.put(
    `https://so-yummy-api.onrender.com/api/favorites/${id}`
  );
};

export const getShopList = async () => {
  return await axios.get(
    `https://so-yummy-api.onrender.com/api/users/shopping-list`
  );
};

export const addShopItem = async (recipeId, ingredientId, measure) => {
  return await axios.post(
    `https://so-yummy-api.onrender.com/api/users/shopping-list`,
    {
      recipeId,
      ingredientId,
      measure,
    }
  );
};
export const removeShopItem = async ingredientId => {
  return await axios.patch(
    `https://so-yummy-api.onrender.com/api/users/shopping-list`,
    {
      _id: ingredientId,
    }
  );
};
