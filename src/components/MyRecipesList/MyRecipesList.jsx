import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router';
import { getMyRecipes } from 'api/index';
import MyRecipeItem from 'components/MyRecipeItem/MyRecipeItem';

import css from './MyRecipesList.module.css';
import {
  MyList,
  MyRecipeListText,
  // ButtonDelete,
  // ButtonRecipe,
} from './MyRecipesList.styled.js';

const MyRecipesList = () => {
  const [loading, setLoading] = useState(true);
  const [allRecipes, setAllRecipes] = useState([]);
  // const location = useLocation();

  useEffect(() => {
    const renderMovies = async () => {
      setLoading(true);
      try {
        setAllRecipes(await getMyRecipes());
        // console.log(setAllRecipes);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    renderMovies();
  }, []);

  return (
    <MyList>
      {/* {loading && <Loader />} */}
      {!loading ? (
        allRecipes.map(({ description, preview, time, title, _id }) => (
          <MyRecipeItem
            key={_id.$oid}
            description={description}
            preview={preview}
            time={time}
            title={title}
            id={_id}
            // handelDelete={handelDelete}
            ButtonDelete={css.buttonDelete}
            ButtonRecipe={css.buttonRecipe}
            // eslint-disable-next-line react/style-prop-object
            style="dark"
          />
        ))
      ) : (
        <MyRecipeListText>You don't have your recipes</MyRecipeListText>
      )}
      {/* { <Paginator /> } */}
    </MyList>
  );
};

export default MyRecipesList;
