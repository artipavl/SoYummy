import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import MainTitle from 'components/MainTitle/MainTitle';
import css from '../Favorite/Favorite.module.css';

const MyRecipes = () => (
  <section className={css.favorite}>
    <MainTitle text="My recipes" />
    <MyRecipesList />
  </section>
);

export default MyRecipes;
