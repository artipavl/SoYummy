import { useSelector } from 'react-redux';

import { selectResults } from 'redux/selectors';

import SearchedRecipesItem from 'components/SearchedRecipesItem';
import { Loader } from 'components/Loader/Loader';

import {
  LoaderWrapper,
  RecipesList,
  RecipeNotFoundImage,
  RecipeNotFoundText,
} from './SearchedRecipesList.styled';

import { selectStatus } from 'redux/selectors';

const SearchedRecipesList = () => {
  const recipes = useSelector(selectResults);
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
