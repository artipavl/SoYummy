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
  selectTotalResults,
  selectStatus,
} from 'redux/selectors';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading } = useSelector(selectStatus);
  const searchType = useSelector(selectSearchType);
  const totalResults = useSelector(selectTotalResults);

  const dispatch = useDispatch();
  const [totalPages, setTotalPages] = useState(null);

  const query = searchParams.get('query');

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

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
    setSearchParams({ page: e.selected + 1, query });
  };

  return (
    <Container>
      <MainTitle text="Search" />
      <SearchBar />
      <SearchedRecipesList />
      {totalPages && (
        <div
          style={{
            display: isLoading ? 'none' : 'block',
            marginBottom: '155px',
            marginTop: '50px',
          }}
        >
          <Pagination pageCount={totalPages} change={handleChange} />
        </div>
      )}
    </Container>
  );
};

export default SearchPage;
