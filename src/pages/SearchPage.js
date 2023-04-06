import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MainTitle from 'components/MainTitle/MainTitle';
import SearchBar from 'components/SearchBar';
import SearchedRecipesList from 'components/SearchedRecipesList';

import { searchRecipes } from 'redux/searchOperations';

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    dispatch(searchRecipes(query));
  }, [dispatch, query]);

  return (
    <div>
      <MainTitle text="Search" />
      <SearchBar />
      <SearchedRecipesList />
    </div>
  );
};

export default SearchPage;
