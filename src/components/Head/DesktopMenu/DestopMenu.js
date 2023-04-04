import search from '../../../images/icons/search_Icon.svg';

import {
  NavStyled,
  NavItems,
  NavItem,
  Navigator,
  SearchIcon,
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
            <SearchIcon src={search} alt="search icon" width={24} />
          </Navigator>
        </NavItem>
      </NavItems>

    </NavStyled>
  );
}
