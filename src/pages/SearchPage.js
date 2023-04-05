import MainTitle from 'components/MainTitle/MainTitle';
import SearchBar from 'components/SearchBar';
import SearchedRecipesList from 'components/SearchedRecipesList';

const SearchPage = () => {
  return (
    <div>
      <MainTitle text="Search" />
      <SearchBar />
      <SearchedRecipesList />
    </div>
  );
};

export default SearchPage;
