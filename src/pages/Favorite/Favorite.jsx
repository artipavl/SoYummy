import FavoriteList from 'components/FavoriteList/FavoriteList';
import MainTitle from 'components/MainTitle/MainTitle';
import css from './Favorite.module.css';

const Favorite = () => (
  <section className={css.favorite}>
    <MainTitle text="Favorite" />
    <FavoriteList />
  </section>
);

export default Favorite;
