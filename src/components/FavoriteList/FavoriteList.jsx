import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router';
import { getFavoriteRecipes } from 'api/index';
import MyRecipeItem from 'components/MyRecipeItem/MyRecipeItem';

import css from './FavoriteList.module.css';
import {
  List,
  FavoriteListText,
  // ButtonDelete,
  // ButtonRecipe,
} from './FavoriteList.styled.js';

const FavoriteList = () => {
  const [loading, setLoading] = useState(true);
  const [allRecipes, setAllRecipes] = useState([]);
  // const location = useLocation();

  useEffect(() => {
    const renderMovies = async () => {
      setLoading(true);
      try {
        setAllRecipes(await getFavoriteRecipes());
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
    <List>
      {/* {loading && <Loader />} */}
      {allRecipes.length !== 0 && !loading ? (
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
            style="normal"
          />
        ))
      ) : (
        <FavoriteListText>You don't have favorite recipes</FavoriteListText>
      )}
      {/* { <Paginator /> } */}
    </List>
  );
};

export default FavoriteList;
