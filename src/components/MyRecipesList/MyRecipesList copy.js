import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { getMyRecipes, deleteMyRecipe } from 'api/index';
import MyRecipeItem from 'components/MyRecipeItem/MyRecipeItem';
import { Loader } from '../Loader/Loader';
import Pagination from '../Pagination/Pagination';

import { List, ListText, LoaderBox } from '../FavoriteList/FavoriteList.styled';

const MyRecipesList = () => {
  const [loading, setLoading] = useState(false);
  const [allRecipes, setAllRecipes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(null);

  useEffect(() => {
    const renderMovies = async () => {
      setLoading(true);
      try {
        const data = await getMyRecipes(page);
        setAllRecipes(data.result);

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
      await deleteMyRecipe(id);
      const data = await getMyRecipes(page);
      setAllRecipes(data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = e => {
    setPage(e.selected + 1);
    scroll.scrollToTop();
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
            styleDel="green"
            styleBtn="dark"
          />
        ))
      ) : (
        <ListText>You don't have your recipes</ListText>
      )}
      {totalPage && (
        <Pagination pageCount={totalPage} page={page} change={handleChange} />
      )}
    </List>
  );
};

export default MyRecipesList;
