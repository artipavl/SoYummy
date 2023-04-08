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
import { IngredientsItem } from 'components/IngredientsItem/IngredientsItem';

const RecipeIngredients = ({ ingredients, recipeId }) => {
  const [shopList, setShopList] = useState([]);

  // const token = useSelector(selectToken);
  // const config = {
  //   headers: { Authorization: `Bearer ${token}` },
  // };

  useEffect(() => {
    getShopList().then(res => {
      const { result } = res.data.data;
      const filteredShopList = result.filter(
        item => item.recipeId === recipeId
      );
      setShopList(filteredShopList);
    });
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
              <IngredientsItem
                key={ingr._id}
                image={ingr.thb}
                title={ingr.ttl}
                measure={ingr.measure}
                shopList={shopList}
              ></IngredientsItem>
            );
          })}
        </ul>
      </Container>
    </IngredientsSection>
  );
};

export default RecipeIngredients;
