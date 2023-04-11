import PopularRecipe from 'components/PopularRecipe/PopularRecipe';
import MainTitle from 'components/MainTitle/MainTitle';
import { Page } from '../Favorite/Favorite.styled';
const AddRecipePage = () => (
  <Page>
    <MainTitle text="Add recipe" />
    <PopularRecipe />
  </Page>
);
export default AddRecipePage;
