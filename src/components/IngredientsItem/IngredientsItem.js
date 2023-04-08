import { FlexWrapper } from 'components/RecipeIngredients/RecipeIngredients.styled';
import {
  IngredientImg,
  IngredientName,
  IngredientNumber,
  IngredientPlaceholder,
} from './IngredientsItem.styled';
import placeholders from 'images/icons/placeholders.svg';
import Checkbox from 'components/Checkbox/Checkbox';

export const IngredientsItem = ({ image, title, measure, shopList }) => {
  return (
    <IngredientsItem>
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
    </IngredientsItem>
  );
};
