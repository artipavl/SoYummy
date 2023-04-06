import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import MainTitle from 'components/MainTitle/MainTitle';
import { Page } from '../Favorite/Favorite.styled';

const MyRecipes = () => (
  <Page>
    <MainTitle text="My recipes" />
    <MyRecipesList />
  </Page>
);

export default MyRecipes;
