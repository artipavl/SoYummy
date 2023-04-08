import { useDispatch, useSelector } from 'react-redux';

import {
  SelectorWrapper,
  SelectorText,
  TypeSelector,
  SelectorOption,
} from './SearchTypeSelector.styled';

import { changeSearchType } from 'redux/searchSlice';

import { selectSearchType } from 'redux/selectors';

const SearchTypeSelector = () => {
  const dispatch = useDispatch();
  const searchType = useSelector(selectSearchType);

  const handleChange = e => {
    dispatch(changeSearchType(e.target.value));
  };

  return (
    <SelectorWrapper>
      <SelectorText>Search by:</SelectorText>
      <TypeSelector value={searchType} onChange={handleChange}>
        <SelectorOption value="title">Title</SelectorOption>
        <SelectorOption value="ingredients">Ingredients</SelectorOption>
      </TypeSelector>
    </SelectorWrapper>
  );
};

export default SearchTypeSelector;
