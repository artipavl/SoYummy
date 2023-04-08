import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeHero from 'components/RecipeHero/RecipeHero';
import RecipeIngredients from 'components/RecipeIngredients/RecipeIngredients';
import RecipeInstructions from 'components/RecipeInstructions/RecipeInstructions';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/selectors';
import { getFavorites, getRecipeById } from 'api/services/axios/axiosService';

const RecipePage = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState('');
  const [instructions, setInstructions] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);

  const token = useSelector(selectToken);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    getRecipeById(recipeId, config)
      .then(res => {
        const { result } = res.data.data;
        setRecipe(result[0]);
        // console.log(result[0]);
        setInstructions(result[0].instructions.split('. '));
        setIngredients(result[0].ingredients);
      })
      .catch(error => console.error(error));

    getFavorites().then(res => {
      const { result: favorites } = res.data.data;
      const isFavorite = favorites.reduce((acc, favorite) => {
        if (favorite._id === recipeId) {
          acc = true;
        }
        return acc;
      }, false);
      isFavorite && setIsFavorite(isFavorite);
    });
  }, []);
  return (
    <div>
      <RecipeHero
        title={recipe.title}
        description={recipe.description}
        time={recipe.time}
        isFavoriteProp={isFavorite}
        recipeId={recipeId}
      ></RecipeHero>
      <RecipeIngredients ingredients={ingredients}></RecipeIngredients>
      <RecipeInstructions
        instructions={instructions}
        picture={recipe.preview}
        alt={recipe.title}
      ></RecipeInstructions>
    </div>
  );
};

export default RecipePage;
