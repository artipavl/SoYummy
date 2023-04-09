import {
  NavStyled,
  NavItems,
  NavItem,
  Navigator,
  SearchIconStyled,
} from './DesktopMenu.styles';

export const DesktopMenu = () => {
  return (
    <NavStyled >
      <NavItems>

        <NavItem>
          <Navigator to="/categories">
            Categories
          </Navigator>
        </NavItem>

        <NavItem>
          <Navigator to="/add">
            Add recipes
          </Navigator>
        </NavItem>

        <NavItem>
          <Navigator to="/my">
            My recipes
          </Navigator>
        </NavItem>

        <NavItem>
          <Navigator to="/favorite">
            Favorites
          </Navigator>
        </NavItem>

        <NavItem>
          <Navigator to="/shopping-list">
            Shopping list
          </Navigator>
        </NavItem>

        <NavItem>
          <Navigator to="/search">
            <SearchIconStyled/>
          </Navigator>
        </NavItem>
      </NavItems>

    </NavStyled>
  );
}
