import IngredientsShoppingList from 'components/IngredientsShoppingList/IngredientsShoppingList';
import MainTitle from 'components/MainTitle/MainTitle';
import { Page } from '../Favorite/Favorite.styled';
const ShoppingList = () => (
  <Page>
    <MainTitle text="Shopping List" />
    <IngredientsShoppingList />
  </Page>
);
export default ShoppingList;
