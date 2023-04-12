import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import RecipeHero from 'components/RecipeHero/RecipeHero';
import RecipeIngredients from 'components/RecipeIngredients/RecipeIngredients';
import RecipeInstructions from 'components/RecipeInstructions/RecipeInstructions';
import { getRecipeById } from 'api/services/axios/axiosService';

const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getRecipeById(recipeId)
      .then(res => {
        const { result } = res.data.data;
        setRecipe(result[0]);
        setInstructions(result[0].instructions.split('. '));
        setIngredients(result[0].ingredients);
      })
      .catch(error => {
        console.error(error);
        navigate('error');
      });
  }, [navigate, recipeId]);
  return (
    <>
      {recipe && (
        <>
          <RecipeHero
            title={recipe.title}
            description={recipe.description}
            time={recipe.time}
            recipeId={recipeId}
            favorites={recipe.favorites}
            owner={recipe?.owner}
          ></RecipeHero>
          <RecipeIngredients ingredients={ingredients}></RecipeIngredients>
          <RecipeInstructions
            instructions={instructions}
            picture={recipe.preview}
            alt={recipe.title}
          ></RecipeInstructions>
        </>
      )}
    </>
  );
};

export default RecipePage;
