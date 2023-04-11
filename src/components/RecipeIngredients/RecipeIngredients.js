import { Container } from 'reusableComponents/Container/Container.styled';
import {
  FlexWrapper,
  IngredientImg,
  IngredientItem,
  IngredientName,
  IngredientNumber,
  IngredientPlaceholder,
  IngredientsHeader,
  IngredientsSection,
  LoaderDiv,
  MarginText,
  TitleText,
} from './RecipeIngredients.styled';
import placeholders from 'images/icons/placeholders.svg';
import Checkbox from 'components/Checkbox/Checkbox';
import { useEffect, useState } from 'react';
import { getShopList } from 'api/services/axios/axiosService';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const RecipeIngredients = ({ ingredients }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [shopList, setShopList] = useState([]);
  const { recipeId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getShopList()
      .then(res => {
        const { result } = res.data.data;
        const filteredShopList = result.filter(
          item => item.recipeId === recipeId
        );
        setShopList(filteredShopList);
      })
      .catch(err => console.log(err.message))
      .finally(setIsLoading(false));
  }, [recipeId]);

  return (
    <IngredientsSection>
      <Container>
        {isLoading ? (
          <LoaderDiv>
            <Loader />
          </LoaderDiv>
        ) : (
          <>
            <IngredientsHeader>
              <TitleText>Ingredients</TitleText>
              <FlexWrapper>
                <MarginText>Number</MarginText>
                <TitleText>Add to list</TitleText>
              </FlexWrapper>
            </IngredientsHeader>
            <ul>
              {ingredients.map(ingr => {
                return (
                  <IngredientItem key={ingr._id}>
                    <FlexWrapper>
                      {ingr.thb ? (
                        <IngredientImg src={ingr.thb} alt={ingr.ttl} />
                      ) : (
                        <IngredientPlaceholder>
                          <use href={placeholders + '#ph-apple-60px'} />
                        </IngredientPlaceholder>
                      )}
                      <IngredientName>{ingr.ttl}</IngredientName>
                    </FlexWrapper>
                    <FlexWrapper>
                      <IngredientNumber>{ingr.measure}</IngredientNumber>
                      <label>
                        <Checkbox
                          ingrId={ingr._id}
                          shopListProp={shopList}
                          ingrMeasure={ingr.measure}
                        />
                      </label>
                    </FlexWrapper>
                  </IngredientItem>
                );
              })}
            </ul>
          </>
        )}
      </Container>
    </IngredientsSection>
  );
};

export default RecipeIngredients;
