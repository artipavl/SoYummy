import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router';
import { getFavoriteRecipes } from 'api/index';
import MyRecipeItem from 'components/MyRecipeItem/MyRecipeItem';

import {
  List,
  ListText,
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
      {allRecipes && !loading ? (
        allRecipes.map(({ description, preview, time, title, _id }) => (
          <MyRecipeItem
            key={_id.$oid}
            description={description}
            preview={preview}
            time={time}
            title={title}
            id={_id}
            // handelDelete={handelDelete}
            styleDel="black"
            styleBtn="normal"
          />
        ))
      ) : (
        <ListText>You don't have favorite recipes</ListText>
      )}
      {/* { <Paginator /> } */}
    </List>
  );
};

export default FavoriteList;
