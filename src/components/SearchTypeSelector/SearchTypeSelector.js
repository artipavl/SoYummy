import { useState } from 'react';

const SearchTypeSelector = ({ handleSearchTypeSelect }) => {
  const [selectedOption, setSelectedOption] = useState('title');

  const handleChange = e => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
    handleSearchTypeSelect(e.target.value);
  };

  return (
    <>
      <p>Search by:</p>
      <select value={selectedOption} onChange={handleChange}>
        <option value="title">Title</option>
        <option value="ingredients">Ingredients</option>
      </select>
    </>
  );
};

export default SearchTypeSelector;
