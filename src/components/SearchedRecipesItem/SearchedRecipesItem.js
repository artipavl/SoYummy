import { useRef } from 'react';
import {
  RecipeItem,
  RecipeImage,
  RecipeTitleContainer,
  RecipeTitleName,
} from './SearchedRecipesItem.styled';

const SearchedRecipesItem = ({ title, preview }) => {
  const tit = useRef();
  return (
    <RecipeItem width={tit.current?.scrollWidth}>
      <RecipeImage src={preview} alt={title} />
      <RecipeTitleContainer>
        <RecipeTitleName ref={tit}>{title}</RecipeTitleName>
      </RecipeTitleContainer>
    </RecipeItem>
  );
};

export default SearchedRecipesItem;
