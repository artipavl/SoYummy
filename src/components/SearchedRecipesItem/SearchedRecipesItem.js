import {
  RecipeItem,
  RecipeImage,
  RecipeTitleContainer,
  RecipeTitleName,
} from './SearchedRecipesItem.styled';

const SearchedRecipesItem = ({ title, preview }) => {
  const animation = title.length > 34;

  return (
    <>
      {animation ? (
        <RecipeItem animation>
          <RecipeImage src={preview} alt={title} />
          <RecipeTitleContainer>
            <RecipeTitleName>{title}</RecipeTitleName>
          </RecipeTitleContainer>
        </RecipeItem>
      ) : (
        <RecipeItem>
          <RecipeImage src={preview} alt={title} />
          <RecipeTitleContainer>
            <RecipeTitleName>{title}</RecipeTitleName>
          </RecipeTitleContainer>
        </RecipeItem>
      )}
    </>
  );
};

export default SearchedRecipesItem;
