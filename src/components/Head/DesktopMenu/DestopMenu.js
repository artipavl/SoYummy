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
          <Navigator to="/">
            Categories
          </Navigator>
        </NavItem>

        <NavItem>
          <Navigator to="/">
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
          <Navigator to="/">
            Shopping list
          </Navigator>
        </NavItem>

        <NavItem>
          <Navigator to="/">
            <SearchIcon src={search} alt="search icon" width={24} />
          </Navigator>
        </NavItem>
      </NavItems>

    </NavStyled>
  );
}
