import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainTitle from 'components/MainTitle/MainTitle';
import SearchBar from 'components/SearchBar';
import SearchedRecipesList from 'components/SearchedRecipesList';
// import { Loader } from 'components/Loader/Loader';

import { SearchPageSection } from './SearchPage.styled';

import { searchRecipes, searchIngredient } from 'redux/searchOperations';

import { selectSearchType } from 'redux/selectors';
// selectIsPageLoading
const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchType = useSelector(selectSearchType);
  // const isPageLoading = useSelector(selectIsPageLoading);
  const dispatch = useDispatch();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    if (searchType === 'title') {
      dispatch(searchRecipes(query));
    } else {
      dispatch(searchIngredient(query));
    }
  }, [dispatch, query, searchType]);

  return (
    <SearchPageSection>
      <MainTitle text="Search" />
      <SearchBar />
      <SearchedRecipesList />
    </SearchPageSection>
  );
};

export default SearchPage;
