import { useParams } from 'react-router';
import {
  NavStyled,
  NavItems,
  NavItem,
  Navigator,
  SearchIconStyled,
} from './DesktopMenu.styles';

export const DesktopMenu = () => {
  const { recipeId = null } = useParams();

  return (
    <NavStyled>
      <NavItems>
        <NavItem>
          <Navigator recipeid={recipeId} to="/categories">
            Categories
          </Navigator>
        </NavItem>

        <NavItem>
          <Navigator recipeid={recipeId} to="/add">
            Add recipes
          </Navigator>
        </NavItem>

        <NavItem>
          <Navigator recipeid={recipeId} to="/my">
            My recipes
          </Navigator>
        </NavItem>

        <NavItem>
          <Navigator recipeid={recipeId} to="/favorite">
            Favorites
          </Navigator>
        </NavItem>

        <NavItem>
          <Navigator recipeid={recipeId} to="/shopping-list">
            Shopping list
          </Navigator>
        </NavItem>

        <NavItem>
          <Navigator recipeid={recipeId} to="/search">
            <SearchIconStyled recipeid={recipeId} />
          </Navigator>
        </NavItem>
      </NavItems>
    </NavStyled>
  );
};
