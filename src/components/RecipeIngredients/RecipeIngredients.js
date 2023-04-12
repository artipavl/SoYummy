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
  MarginText,
  TitleText,
} from './RecipeIngredients.styled';
import placeholders from 'images/icons/placeholders.svg';
import Checkbox from 'components/Checkbox/Checkbox';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserShoppingList } from 'redux/selectors';
import { useMemo } from 'react';

const RecipeIngredients = ({ ingredients }) => {
  const { recipeId } = useParams();

  const UserShopList = useSelector(selectUserShoppingList);

  const shopList = useMemo(
    () => UserShopList.filter(item => item.recipeId === recipeId),
    [UserShopList, recipeId]
  );

  return (
    <IngredientsSection>
      <Container>
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
      </Container>
    </IngredientsSection>
  );
};

export default RecipeIngredients;
