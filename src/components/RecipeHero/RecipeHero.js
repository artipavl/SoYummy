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
  removeFromFavorites,
} from 'api/services/axios/axiosService';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUserId } from 'redux/selectors';

const RecipeHero = ({
  title,
  description,
  time,
  recipeId,
  favorites,
  owner,
}) => {
  const userId = useSelector(selectUserId);
  const [isFavorite, setIsFavorite] = useState(() =>
    favorites ? favorites.includes(userId) : false
  );
  const [isOwnRecipe] = useState(() => owner === userId);

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

  return (
    <HeroSection>
      <Container>
        <TextWrap addMargin={isOwnRecipe}>
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
