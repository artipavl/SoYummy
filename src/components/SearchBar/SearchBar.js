import { useState } from 'react';

import SearchForm from 'components/SearchForm';
import SearchTypeSelector from 'components/SearchTypeSelector';

const SearchBar = () => {
  const [searchType, setSearchType] = useState('title');

  const handleSearchTypeSelect = selectedType => setSearchType(selectedType);

  return (
    <>
      <SearchForm searchType={searchType} />
      <SearchTypeSelector handleSearchTypeSelect={handleSearchTypeSelect} />
    </>
  );
};

export default SearchBar;
