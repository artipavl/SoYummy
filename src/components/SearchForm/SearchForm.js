import { Formik } from 'formik';

import { useSearchParams } from 'react-router-dom';

import {
  Form,
  SearchContainer,
  SearchValue,
  SearchBtn,
} from './SearchForm.styled';

const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();

  const onSubmit = ({ query }) => {
    const trimmedQuery = query.trim();

    if (trimmedQuery === '') {
      setSearchParams();

      return null;
    }

    setSearchParams({ query: trimmedQuery });
  };

  return (
    <Formik initialValues={{ query: '' }} onSubmit={onSubmit}>
      {({ handleSubmit, handleChange, values }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <SearchContainer>
              <SearchValue
                type="text"
                name="query"
                value={values.query}
                onChange={handleChange}
              />
              <SearchBtn type="submit">Search</SearchBtn>
            </SearchContainer>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SearchForm;
