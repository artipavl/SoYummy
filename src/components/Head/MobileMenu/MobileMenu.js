import logo from '../../../images/icons/logo_Desktop.svg';

import cross from '../../../images/icons/cross.svg';

import {
  MobileMenuSection,
  MobileMenuHeader,
  LinkLogo,
  CrossImg,
  NavLogo,
  NavStyled,
  NavItems,
  NavItem,
  Navigator,
  SearchText,
} from './MobileMenu.styled';

import { SearchIconStyled } from '../DesktopMenu/DesktopMenu.styles';

export const MobileMenu = ({ openState, handleMenuClick, children }) => {
  return (
    <MobileMenuSection className={openState ? 'open' : ''}>
      <MobileMenuHeader onClick={handleMenuClick}>
        <LinkLogo to="/main">
          <NavLogo src={logo} alt="logo" width={40} />
        </LinkLogo>
        <button>
          <CrossImg src={cross} alt="close menu" width={32} />
        </button>
      </MobileMenuHeader>

      <NavStyled onClick={handleMenuClick}>
        <NavItems>
          <NavItem>
            <Navigator to="/categories" onClick={handleMenuClick}>
              Categories
            </Navigator>
          </NavItem>

          <NavItem>
            <Navigator to="/add" onClick={handleMenuClick}>
              Add recipes
            </Navigator>
          </NavItem>

          <NavItem>
            <Navigator to="/my" onClick={handleMenuClick}>
              My recipes
            </Navigator>
          </NavItem>

          <NavItem>
            <Navigator to="/favorite" onClick={handleMenuClick}>
              Favorites
            </Navigator>
          </NavItem>

          <NavItem>
            <Navigator to="/shopping-list" onClick={handleMenuClick}>
              Shopping list
            </Navigator>
          </NavItem>

          <NavItem>
            <Navigator to="/search" onClick={handleMenuClick}>
              <SearchIconStyled>Search</SearchIconStyled>
              <SearchText>Search</SearchText>
            </Navigator>
          </NavItem>
        </NavItems>
        <div
          style={{
            position: 'absolute',
            bottom: 18,
          }}
        >
          {children}
        </div>
      </NavStyled>
    </MobileMenuSection>
  );
};
