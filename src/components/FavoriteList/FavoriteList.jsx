import { useState } from 'react';

import MyRecipeItem from 'components/MyRecipeItem/MyRecipeItem';
import css from './FavoriteList.module.css';

const FavoriteList = () => {
  const [loading, ] = useState(true);

  return (
    <div className={css.favoriteList}>
      <ul className={css.list}>
        {/* {loading && <Loader />} */}

        {!loading ? (
              <MyRecipeItem />
        ) : (
            <h3>You don't have favorite recipes</h3>
        )}
      </ul>
      {/* { <Paginator /> } */}
    </div>
  );
};

export default FavoriteList;
