import {
  IngredientImg,
  IngredientName,
  IngredientNumber,
  IngredientPlaceholder,
  FlexWrapper,
} from './Ingredient.styled';
import placeholders from 'images/icons/placeholders.svg';
import Checkbox from 'components/Checkbox/Checkbox';
import { useEffect } from 'react';

const Ingredient = ({ image, title, measure, shopList }) => {
  useEffect(() => {}, []);
  return (
    <div>
      <FlexWrapper>
        {image ? (
          <IngredientImg src={image} alt={title} />
        ) : (
          <IngredientPlaceholder>
            <use href={placeholders + '#ph-apple-60px'} />
          </IngredientPlaceholder>
        )}
        <IngredientName>{title}</IngredientName>
      </FlexWrapper>
      <FlexWrapper>
        <IngredientNumber>{measure}</IngredientNumber>
        <label>
          <Checkbox />
        </label>
      </FlexWrapper>
    </div>
  );
};

export default Ingredient;
