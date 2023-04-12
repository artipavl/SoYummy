import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainTitle from 'components/MainTitle/MainTitle';
import SearchBar from 'components/SearchBar';
import SearchedRecipesList from 'components/SearchedRecipesList';
import Pagination from 'components/Pagination/Pagination';
import { Container } from 'reusableComponents/Container/Container.styled';

import { searchRecipes, searchIngredient } from 'redux/searchOperations';

import {
  selectSearchType,
  selectResults,
  selectStatus,
  selectTotalResults,
} from 'redux/selectors';

const SearchPage = () => {
  const [searchParams] = useSearchParams();

  const searchType = useSelector(selectSearchType);
  const recipes = useSelector(selectResults);
  const { isLoading } = useSelector(selectStatus);
  const totalResults = useSelector(selectTotalResults);

  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState(null);
  const [page, setPage] = useState(1);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    const totalCountPage = Math.ceil(totalResults / 12);

    if (totalCountPage > 1) {
      setTotalPages(totalCountPage);
    }

    if (searchType === 'title') {
      dispatch(searchRecipes({ query, page }));
    } else {
      dispatch(searchIngredient({ query, page }));
    }
  }, [dispatch, page, query, searchType, totalResults]);

  const handleChange = e => {
    setPage(e.selected + 1);
  };

  return (
    <Container>
      <MainTitle text="Search" />
      <SearchBar />
      <SearchedRecipesList />
      {totalPages && recipes.length !== 0 && !isLoading && (
        <Pagination pageCount={totalPages} page={page} change={handleChange} />
      )}
    </Container>
  );
};

export default SearchPage;
