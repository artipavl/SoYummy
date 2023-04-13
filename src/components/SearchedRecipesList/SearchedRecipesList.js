import SearchedRecipesItem from 'components/SearchedRecipesItem';
import { Loader } from 'components/Loader/Loader';

import {
  LoaderWrapper,
  RecipesList,
  RecipeNotFoundImage,
  RecipeNotFoundText,
} from './SearchedRecipesList.styled';

const SearchedRecipesList = ({ recipes, isLoading }) => {
  return (
    <>
      {!isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <RecipesList>
          {recipes.map(({ _id, title, preview }) => {
            return (
              <SearchedRecipesItem
                key={_id}
                title={title}
                preview={preview}
                id={_id}
              />
            );
          })}
        </RecipesList>
      )}

      {isLoading && recipes.length === 0 && (
        <>
          <RecipeNotFoundImage />
          <RecipeNotFoundText>
            Try looking for something else..
          </RecipeNotFoundText>
        </>
      )}
    </>
  );
};

export default SearchedRecipesList;
