import clocks from 'images/icons/clocks.svg';
import {
  ButtonWrap,
  FavoriteBtn,
  HeroSection,
  HeroTitle,
  IconClocks,
  RecepyDescr,
  RecipeTime,
  RecipeTimeWrapper,
  TextWrap,
} from './RecipeHero.styled';
import { Container } from 'reusableComponents/Container/Container.styled';
import {
  addToFavorites,
  getFavorites,
  getOwnRecipes,
  removeFromFavorites,
} from 'api/services/axios/axiosService';
import { useEffect, useState } from 'react';

const RecipeHero = ({ title, description, time, recipeId }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isOwnRecipe, setIsOwnRecipe] = useState(false);

  const handleFavoriteAdd = id => {
    addToFavorites(id)
      .then(res => {
        setIsFavorite(true);
      })
      .catch(err => console.log(err.message));
  };
  const handleFavoriteRemove = id => {
    removeFromFavorites(id)
      .then(res => {
        setIsFavorite(false);
      })
      .catch(err => console.log(err.message));
  };

  useEffect(() => {
    const isArrHasRecipeId = arr => {
      return arr.reduce((acc, item) => {
        if (item._id === recipeId) {
          acc = true;
        }
        return acc;
      }, false);
    };

    getFavorites()
      .then(res => {
        const { result: favorites } = res.data.data;
        const isFavorite = isArrHasRecipeId(favorites);
        isFavorite && setIsFavorite(isFavorite);
      })
      .catch(err => console.log(err.message));

    getOwnRecipes()
      .then(res => {
        const { result: ownRecipes } = res.data.data;
        const ownRecipe = isArrHasRecipeId(ownRecipes);
        ownRecipe && setIsOwnRecipe(ownRecipe);
      })
      .catch(err => console.log(err.message));
  }, [recipeId]);
  return (
    <HeroSection>
      <Container>
        <TextWrap>
          <HeroTitle>{title}</HeroTitle>
          <RecepyDescr>{description}</RecepyDescr>
        </TextWrap>
        <ButtonWrap>
          {isFavorite ? (
            <FavoriteBtn onClick={() => handleFavoriteRemove(recipeId)}>
              Remove from favorites
            </FavoriteBtn>
          ) : (
            <FavoriteBtn
              onClick={() => handleFavoriteAdd(recipeId)}
              disabled={isOwnRecipe}
            >
              Add to favorites
            </FavoriteBtn>
          )}
        </ButtonWrap>

        <RecipeTimeWrapper>
          <IconClocks>
            <use href={clocks + '#clocks-desk'}></use>
          </IconClocks>
          {time && <RecipeTime>{`${time} min`}</RecipeTime>}
        </RecipeTimeWrapper>
      </Container>
    </HeroSection>
  );
};

export default RecipeHero;
