import axios from 'axios';

export const getRecipeById = async (id, config) => {
  return await axios.get(
    `https://so-yummy-api.onrender.com/api/recipes/${id}`,
    config
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
