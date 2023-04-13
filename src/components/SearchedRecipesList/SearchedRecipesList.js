import { useSelector } from 'react-redux';

import { selectStatus } from 'redux/selectors';

import SearchedRecipesItem from 'components/SearchedRecipesItem';
import { Loader } from 'components/Loader/Loader';

import {
  LoaderWrapper,
  RecipesList,
  RecipeNotFoundImage,
  RecipeNotFoundText,
} from './SearchedRecipesList.styled';

const SearchedRecipesList = ({ recipes }) => {
  const { isLoading, isResolved } = useSelector(selectStatus);

  return (
    <>
      {isLoading ? (
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

      {isResolved && recipes.length === 0 && (
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
