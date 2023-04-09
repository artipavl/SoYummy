import { useSelector } from 'react-redux';

import { selectResults } from 'redux/selectors';

import SearchedRecipesItem from 'components/SearchedRecipesItem';
import { Loader } from 'components/Loader/Loader';

import { RecipesList, RecipeNotFoundText } from './SearchedRecipesList.styled';

import { selectStatus } from 'redux/selectors';

const SearchedRecipesList = () => {
  const results = useSelector(selectResults);
  const { isLoading, isResolved } = useSelector(selectStatus);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <RecipesList>
          {results.map(({ _id, title, preview }) => {
            return (
              <SearchedRecipesItem key={_id} title={title} preview={preview} />
            );
          })}
        </RecipesList>
      )}
      {isResolved && results.length === 0 && (
        <RecipeNotFoundText>
          Try looking for something else..
        </RecipeNotFoundText>
      )}
    </>
  );
};

export default SearchedRecipesList;
