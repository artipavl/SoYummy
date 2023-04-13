import { Formik } from 'formik';

import { useSearchParams } from 'react-router-dom';

import {
  Form,
  SearchContainer,
  SearchValue,
  SearchBtn,
} from './SearchForm.styled';
import {
  SelectorOption,
  SelectorText,
  SelectorWrapper,
  TypeSelector,
} from 'components/SearchTypeSelector/SearchTypeSelector.styled';
import { useState } from 'react';

const SearchForm = ({ get }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [paramsQ, setParamsQ] = useState(() =>
    searchParams.get('query') ? searchParams.get('query') : ''
  );
  const [paramsT, setParamsT] = useState(() =>
    searchParams.get('type') ? searchParams.get('type') : 'title'
  );

  const onSubmit = e => {
    e.preventDefault();
    if (!paramsQ.trim()) {
      return;
    }
    const trimmedQuery = paramsQ.trim();
 
    setSearchParams({ query: trimmedQuery, type: paramsT, page: 1 });
    get({ query: trimmedQuery, type: paramsT });
  };

  return (
    <Formik
    // initialValues={{
    //   query: searchParams.get('query') ? searchParams.get('query') : '',
    //   type: searchParams.get('type') ? searchParams.get('type') : 'title',
    // }}
    // onSubmit={onSubmit}
    >
      {() => {
        return (
          <Form onSubmit={onSubmit}>
            <SearchContainer>
              <SearchValue
                type="text"
                name="query"
                placeholder="Enter the text"
                value={paramsQ}
                onChange={e => setParamsQ(e.target.value)}
              />
              <SearchBtn type="submit">Search</SearchBtn>
            </SearchContainer>
            <SelectorWrapper>
              <SelectorText>Search by:</SelectorText>
              <TypeSelector
                name="type"
                value={paramsT}
                onChange={e => setParamsT(e.target.value)}
              >
                <SelectorOption value="title">Title</SelectorOption>
                <SelectorOption value="ingredients">Ingredients</SelectorOption>
              </TypeSelector>
            </SelectorWrapper>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SearchForm;
