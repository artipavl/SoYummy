import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router';

import { getFavoriteRecipes, deleteFavoriteRecipe } from 'api/index';
import MyRecipeItem from 'components/MyRecipeItem/MyRecipeItem';
import { Loader } from '../Loader/Loader';

import { List, ListText, LoaderBox, } from './FavoriteList.styled.js';

const FavoriteList = () => {
  const [loading, setLoading] = useState(true);
  const [allRecipes, setAllRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);
  // const location = useLocation();

  useEffect(() => {
    const renderMovies = async () => {
      setLoading(true);
      try {
        const data = await getFavoriteRecipes(page);
        setAllRecipes(data);

        const totalCountPage = Math.ceil(data.total / 4);
        if (totalCountPage > 1) {
          setTotalPage(totalCountPage);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    renderMovies();
  }, [page]);

  const handelDelete = async id => {
    try {
      await deleteFavoriteRecipe(id);
      const data = await getFavoriteRecipes(page);
      setAllRecipes(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <List>
      {loading && (
        <LoaderBox>
          <Loader />
        </LoaderBox>
      )}
      {allRecipes.length !== 0 && !loading ? (
        allRecipes.map(({ description, preview, time, title, _id }) => (
          <MyRecipeItem
            key={_id}
            description={description}
            preview={preview}
            time={time}
            title={title}
            id={_id}
            handelDelete={handelDelete}
            styleDel="black"
            styleBtn="normal"
          />
        ))
      ) : (
        <ListText>You don't have your recipes</ListText>
      )}
      {totalPage && (
        <div change={handleChange}>Paginator</div>
        //   <Paginator
        //     count={totalPage}
        //     page={page}
        //     change={handleChange} />
      )}
    </List>
  );
};

export default FavoriteList;
