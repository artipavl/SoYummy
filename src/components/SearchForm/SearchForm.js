import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { searchRecipes } from 'redux/searchOperations';

const SearchForm = () => {
  const dispatch = useDispatch();

  const onSubmit = value => {
    dispatch(searchRecipes(value));
  };

  return (
    <Formik initialValues={{ recipe: '' }} onSubmit={onSubmit}>
      {({ handleSubmit, handleChange, values }) => {
        return (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="recipe"
              value={values.recipe}
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
