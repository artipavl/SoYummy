import {
  RecipeItem,
  RecipeLink,
  RecipeWrapper,
  RecipeImage,
  RecipeTitleContainer,
  RecipeTitleName,
} from './SearchedRecipesItem.styled';

const SearchedRecipesItem = ({ title, preview, id }) => {
  const animation = title.length > 34;

  return (
    <>
      {animation ? (
        <RecipeItem animation>
          <RecipeLink to={`/recipes/${id}`}>
            <RecipeWrapper>
              <RecipeImage src={preview} alt={title} />
              <RecipeTitleContainer>
                <RecipeTitleName>{title}</RecipeTitleName>
              </RecipeTitleContainer>
            </RecipeWrapper>
          </RecipeLink>
        </RecipeItem>
      ) : (
        <RecipeItem>
          <RecipeLink to={`/recipes/${id}`}>
            <RecipeWrapper>
              <RecipeImage src={preview} alt={title} />
              <RecipeTitleContainer>
                <RecipeTitleName>{title}</RecipeTitleName>
              </RecipeTitleContainer>
            </RecipeWrapper>
          </RecipeLink>
        </RecipeItem>
      )}
    </>
  );
};

export default SearchedRecipesItem;
