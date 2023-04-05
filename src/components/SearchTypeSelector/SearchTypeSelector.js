import { useState } from 'react';

const SearchTypeSelector = () => {
  const [selectedOption, setSelectedOption] = useState('title');

  const handleChange = e => {
    setSelectedOption(e.target.value);
  };

  return (
    <select value={selectedOption} onChange={handleChange}>
      <option value="title">Title</option>
      <option value="ingredients">Ingredients</option>
    </select>
  );
};

export default SearchTypeSelector;
