import { Formik } from 'formik';

import { useSearchParams } from 'react-router-dom';

const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();

  const onSubmit = ({ query }) => {
    setSearchParams({ query });
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
