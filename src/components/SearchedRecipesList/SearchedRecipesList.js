import { useSelector } from 'react-redux';

import { selectResults } from 'redux/selectors';

import SearchedRecipesItem from 'components/SearchedRecipesItem';

import { RecipesList } from './SearchedRecipesList.styled';

import { selectStatus } from 'redux/selectors';

const SearchedRecipesList = () => {
  const results = useSelector(selectResults);
  const { isLoading, isResolved } = useSelector(selectStatus);

  if (isLoading) {
    // потрібно добавити компонент Loader сюди.
    return 'loading';
  }

  if (isResolved && results.length === 0) {
    return <div>Empty page</div>;
  }

  return (
    <RecipesList>
      {results.map(({ _id, title, preview }) => {
        return (
          <SearchedRecipesItem key={_id} title={title} preview={preview} />
        );
      })}
    </RecipesList>
  );
};

export default SearchedRecipesList;
