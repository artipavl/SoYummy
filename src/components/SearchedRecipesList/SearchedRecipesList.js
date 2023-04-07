import { useSelector } from 'react-redux';

import { selectResults } from 'redux/selectors';

import SearchedRecipesItem from 'components/SearchedRecipesItem';

import { RecipesList } from './SearchedRecipesList.styled';

const SearchedRecipesList = () => {
  const results = useSelector(selectResults);

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
