import { useSelector } from 'react-redux';

import { selectResults } from 'redux/selectors';

import SearchedRecipesItem from 'components/SearchedRecipesItem';

const SearchedRecipesList = () => {
  const results = useSelector(selectResults);

  return (
    <ul>
      {results.map(({ _id, title }) => {
        return <SearchedRecipesItem key={_id} />;
      })}
    </ul>
  );
};

export default SearchedRecipesList;
