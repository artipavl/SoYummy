import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeHero from 'components/RecipeHero/RecipeHero';
import RecipeIngredients from 'components/RecipeIngredients/RecipeIngredients';
import RecipeInstructions from 'components/RecipeInstructions/RecipeInstructions';
import { getRecipeById } from 'api/services/axios/axiosService';

const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState('');
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    getRecipeById(recipeId)
      .then(res => {
        const { result } = res.data.data;
        setRecipe(result[0]);
        setInstructions(result[0].instructions.split('. '));
        setIngredients(result[0].ingredients);
      })
      .catch(error => console.error(error));
  }, [recipeId]);
  return (
    <>
      <RecipeHero
        title={recipe.title}
        description={recipe.description}
        time={recipe.time}
        recipeId={recipeId}
      ></RecipeHero>
      <RecipeIngredients ingredients={ingredients}></RecipeIngredients>
      <RecipeInstructions
        instructions={instructions}
        picture={recipe.preview}
        alt={recipe.title}
      ></RecipeInstructions>
    </>
  );
};

export default RecipePage;
