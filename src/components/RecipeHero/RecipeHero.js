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
} from './RecipeHero.styled';
import { Container } from 'reusableComponents/Container/Container.styled';
import {
  addToFavorites,
  removeFromFavorites,
} from 'api/services/axios/axiosService';
import { useEffect, useState } from 'react';

const RecipeHero = ({ title, description, time, isFavoriteProp, recipeId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

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

  useEffect(() => {}, [isFavorite]);
  return (
    <HeroSection>
      <Container>
        <HeroTitle>{title}</HeroTitle>
        <RecepyDescr>{description}</RecepyDescr>
        <ButtonWrap>
          {isFavorite ? (
            <FavoriteBtn onClick={() => handleFavoriteRemove(recipeId)}>
              Remove from favorites
            </FavoriteBtn>
          ) : (
            <FavoriteBtn onClick={() => handleFavoriteAdd(recipeId)}>
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
