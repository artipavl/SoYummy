import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { useSearchParams } from 'react-router-dom';

import { searchRecipes, searchIngredient } from 'redux/searchOperations';

import { Form, SearchValue, SearchBtn } from './SearchForm.styled';

const SearchForm = ({ searchType }) => {
  const dispatch = useDispatch();
  const [, setSearchParams] = useSearchParams();

  const onSubmit = ({ query }) => {
    setSearchParams({ query });

    switch (searchType) {
      case 'title':
        dispatch(searchRecipes(query));
        break;

      case 'ingredients':
        dispatch(searchIngredient(query));
        break;

      default:
        break;
    }
  };

  return (
    <Formik initialValues={{ query: '' }} onSubmit={onSubmit}>
      {({ handleSubmit, handleChange, values }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <SearchValue
              type="text"
              name="query"
              value={values.query}
              onChange={handleChange}
            />
            <SearchBtn type="submit">Search</SearchBtn>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SearchForm;
