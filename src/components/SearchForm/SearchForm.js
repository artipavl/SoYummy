import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { searchRecipes, searchIngredient } from 'redux/searchOperations';

import { useSearchParams } from 'react-router-dom';

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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="query"
              value={values.query}
              onChange={handleChange}
            />
            <button type="submit">Search</button>
          </form>
        );
      }}
    </Formik>
  );
};

export default SearchForm;
