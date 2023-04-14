import { useSearchParams } from 'react-router-dom';

import {
  Form,
  SearchContainer,
  SearchValue,
  SearchBtn,
  SelectorOption,
  SelectorText,
  SelectorWrapper,
  TypeSelector,
} from './SearchForm.styled';

import { useState } from 'react';

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
        <TypeSelector
          name="type"
          value={paramsType}
          onChange={e => setParamsType(e.target.value)}
        >
          <SelectorOption value="title">Title</SelectorOption>
          <SelectorOption value="ingredients">Ingredients</SelectorOption>
        </TypeSelector>
      </SelectorWrapper>
    </Form>
  );
};

export default SearchForm;
