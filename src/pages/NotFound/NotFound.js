// import MyRecipesList from 'components/MyRecipesList/MyRecipesList';
import MainTitle from 'components/MainTitle/MainTitle';
import NotFoundList from 'components/NotFoundList/NotFoundList';

import { Page } from '../NotFound/NotFound.styled';

const NotFound = () => (
  <Page>
    <MainTitle text="" />
    <NotFoundList />
  </Page>
);

export default NotFound;
