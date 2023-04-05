// import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import data from './data';
import RecipeHero from 'components/RecipeHero/RecipeHero';
import RecipeIngredients from 'components/RecipeIngredients/RecipeIngredients';
import RecipeInstructions from 'components/RecipeInstructions/RecipeInstructions';

const RecipePage = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState('');
  const [instructions, setInstructions] = useState([]);

  // const getRecipeById = async recipeId => {
  //   return await axios.get(`https://so-yummy-api.onrender.com/api/recipes/${recipeId}`);

  // };

  const onBtnClick = () => {
    console.log('On favorite btn was clicked');
  };
  useEffect(() => {
    // getRecipeById(id)
    //   .then(response => {
    //     setRecipe(response.data.data.result)
    //   console.log(response.data.data.result)})
    //   .catch(error => console.error(error));
    setRecipe(data);
    setInstructions(data.instructions.split('\r\n\r\n'));
  }, []);
  return (
    <div>
      <RecipeHero
        title={recipe.title}
        description={recipe.description}
        time={recipe.time}
        onBtnClick={onBtnClick}
      ></RecipeHero>
      <RecipeIngredients></RecipeIngredients>
      <RecipeInstructions instructions={instructions} picture={recipe.preview} alt={recipe.title}></RecipeInstructions>
    </div>
  );
};

export default RecipePage;
