import { useSearchParams } from 'react-router-dom';
import { useState, useRef } from 'react';

import {
  Form,
  SearchContainer,
  SearchValue,
  SearchBtn,
  SelectorText,
  SelectorWrapper,
  SelectContainer,
  SelectButton,
  SelectCategories,
  SelectCategoriesItem,
} from './SearchForm.styled';

const SearchForm = ({ get }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [paramsQuery, setParamsQuery] = useState(
    () => searchParams.get('query') || ''
  );
  const [paramsType, setParamsType] = useState(
    () => searchParams.get('type') || 'title'
  );

  const trimmedQuery = paramsQuery.trim();

  const onSubmit = e => {
    e.preventDefault();
    if (!trimmedQuery) {
      return;
    }

    setSearchParams({ query: trimmedQuery, type: paramsType, page: 1 });
    get({ query: trimmedQuery, type: paramsType });
  };

  const [open, setOpen] = useState(false);
  const optionsRef = useRef(null);

  const toggleDropdown = e => {
    setParamsType(e.target.value);

    setOpen(!open);
  };

  const handleSelectOption = e => {
    const selectedValue = e.currentTarget.getAttribute('value');

    setParamsType(selectedValue);

    setOpen(false);
  };

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      setOpen(false);
    }
  });

  window.addEventListener('mousedown', e => {
    if (optionsRef.current && !optionsRef.current.contains(e.target)) {
      setOpen(false);
    }
  });

  return (
    <Form onSubmit={onSubmit}>
      <SearchContainer>
        <SearchValue
          type="text"
          name="query"
          placeholder="Enter the text"
          value={paramsQuery}
          onChange={e => setParamsQuery(e.target.value)}
        />
        <SearchBtn type="submit">Search</SearchBtn>
      </SearchContainer>
      <SelectorWrapper>
        <SelectorText>Search by:</SelectorText>

        <SelectContainer>
          <SelectButton
            type="button"
            name="type"
            value={paramsType}
            onClick={toggleDropdown}
          >
            {paramsType.charAt(0).toUpperCase() + paramsType.slice(1)}
          </SelectButton>
          <SelectCategories
            ref={optionsRef}
            style={{ display: open ? 'block' : 'none' }}
          >
            <SelectCategoriesItem value="title" onClick={handleSelectOption}>
              Title
            </SelectCategoriesItem>
            <SelectCategoriesItem
              value="ingredients"
              onClick={handleSelectOption}
            >
              Ingredients
            </SelectCategoriesItem>
          </SelectCategories>
        </SelectContainer>
      </SelectorWrapper>
    </Form>
  );
};

export default SearchForm;
