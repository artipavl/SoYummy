import { useState } from 'react';

import {
  SelectorWrapper,
  SelectorText,
  TypeSelector,
  SelectorOption,
} from './SearchTypeSelector.styled';

const SearchTypeSelector = ({ handleSearchTypeSelect }) => {
  const [selectedOption, setSelectedOption] = useState('title');

  const handleChange = e => {
    console.log(e.target.value);
    setSelectedOption(e.target.value);
    handleSearchTypeSelect(e.target.value);
  };

  return (
    <SelectorWrapper>
      <SelectorText>Search by:</SelectorText>
      <TypeSelector value={selectedOption} onChange={handleChange}>
        <SelectorOption value="title">Title</SelectorOption>
        <SelectorOption value="ingredients">Ingredients</SelectorOption>
      </TypeSelector>
    </SelectorWrapper>
  );
};

export default SearchTypeSelector;
