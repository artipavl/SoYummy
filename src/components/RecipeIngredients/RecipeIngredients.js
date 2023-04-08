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
import { useEffect, useState } from 'react';
import { getShopList } from 'api/services/axios/axiosService';
import { useSelector } from 'react-redux';
import { selectToken } from 'redux/selectors';

const RecipeIngredients = ({ ingredients }) => {
  const [shopList, setShopList] = useState([]);

  const token = useSelector(selectToken);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    getShopList(config).then(res => console.log(`shop-list: ${res}`));
  }, []);
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
                    <Checkbox />
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
