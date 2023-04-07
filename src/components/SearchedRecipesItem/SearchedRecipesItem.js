import {
  RecipeItem,
  RecipeImage,
  RecipeTitleContainer,
  RecipeTitleName,
} from './SearchedRecipesItem.styled';

const SearchedRecipesItem = ({ title, preview }) => {
  return (
    <RecipeItem>
      <RecipeImage src={preview} alt={title} />
      <RecipeTitleContainer>
        <RecipeTitleName>{title}</RecipeTitleName>
      </RecipeTitleContainer>
    </RecipeItem>
  );
};

export default SearchedRecipesItem;
