import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import MainTitle from 'components/MainTitle/MainTitle';
import SearchedRecipesList from 'components/SearchedRecipesList';
import Pagination from 'components/Pagination/Pagination';

import SearchForm from 'components/SearchForm';

import { getSearchRecipes, getSearchIngredients } from 'api/serviseApi';
import { Page } from 'pages/Favorite/Favorite.styled';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(() =>
    searchParams.get('page') ? Number(searchParams.get('page')) : 1
  );
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getResults({ query, type = 'title', page = 1 }) {
      setIsLoading(false);
      setPage(page);
      try {
        if (type === 'title') {
          const data = await getSearchRecipes(query, page);
          setTotalPages(Math.ceil(data.data.total / 12));
          setRecipes(data.data.result);
        } else {
          const data = await getSearchIngredients(query, page);
          setTotalPages(Math.ceil(data.data.total / 12));
          setRecipes(data.data.result);
        }
        setIsLoading(true);
      } catch (error) {
        setIsLoading(true);
      }
    }

    if (
      searchParams.get('query') &&
      searchParams.get('type') &&
      recipes.length === 0
    ) {
      getResults({
        query: searchParams.get('query'),
        type: searchParams.get('type'),
        page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
      });
    }
  }, [recipes.length, searchParams]);

  const get = async ({ query, type = 'title', page = 1 }) => {
    setIsLoading(false);
    setPage(page);
    try {
      if (type === 'title') {
        const data = await getSearchRecipes(query, page);
        setTotalPages(Math.ceil(data.data.total / 12));
        setRecipes(data.data.result);
      } else {
        const data = await getSearchIngredients(query, page);
        setTotalPages(Math.ceil(data.data.total / 12));
        setRecipes(data.data.result);
      }
      setIsLoading(true);
    } catch (error) {
      setIsLoading(true);
    }
  };

  const handleChange = e => {
    setSearchParams({
      page: e.selected + 1,
      query: searchParams.get('query'),
      type: searchParams.get('type'),
    });
    get({
      page: e.selected + 1,
      query: searchParams.get('query'),
      type: searchParams.get('type'),
    });
  };

  return (
    <Page>
      <MainTitle text="Search" />
      <SearchForm get={get} />
      <SearchedRecipesList recipes={recipes} isLoading={isLoading} />
      {totalPages > 0 && (
        <div
          style={{
            display: 'block',
            marginBottom: '155px',
            marginTop: '50px',
          }}
        >
          <Pagination
            pageCount={totalPages}
            change={handleChange}
            forcePage={page}
          />
        </div>
      )}
    </Page>
  );
};

export default SearchPage;
