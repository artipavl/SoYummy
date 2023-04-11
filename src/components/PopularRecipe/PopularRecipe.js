import { useState, useEffect } from 'react';

// import { Link } from 'react-router-dom';
import { getPopularRecipes } from '../../api/serviseApi';
import { Loader } from 'components/Loader/Loader';

import {
  LoaderDiv,
  Preview,
  TitlePopularRecipe,
  ContainerPopularRecipe,
  ItemBox,
  TextBox,
  ItemList,
  TitleRecipe,
  Description,
  ErrorText,
  StyledNavLink,
} from './PopularRecipe.styled';

const PopularRecipe = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    const fetchRecipeList = async () => {
      setIsLoading(true);
      try {
        setRecipeList(await getPopularRecipes());
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRecipeList();
  }, []);

  return (
    <ContainerPopularRecipe>
      {isLoading ? (
        <LoaderDiv>
          <Loader />
        </LoaderDiv>
      ) : (
        <>
          <TitlePopularRecipe>Popular recipe</TitlePopularRecipe>
          {recipeList ? (
            <ItemList>
              {recipeList.map(({ _id, title, preview, description }) => (
                <li key={_id}>
                  <StyledNavLink to={`/recipe/${_id}`}>
                    <ItemBox>
                      <Preview src={preview} alt="Ingredient" />
                      <TextBox>
                        <TitleRecipe>{title}</TitleRecipe>
                        <Description>{description}</Description>
                      </TextBox>
                    </ItemBox>
                  </StyledNavLink>
                </li>
              ))}
            </ItemList>
          ) : (
            <ErrorText>
              Unfortunately, there are currently no popular recipes 🙁
            </ErrorText>
          )}
        </>
      )}
    </ContainerPopularRecipe>
  );
};

export default PopularRecipe;
