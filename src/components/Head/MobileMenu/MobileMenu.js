import { useEffect } from 'react';

import {
  MobileMenuSection,
  MobileMenuHeader,
  LinkLogo,
  NavLogo,
  NavStyled,
  NavItems,
  NavItem,
  Navigator,
  SearchText,
} from './MobileMenu.styled';

import { CloseButtonStyled } from '../UserMenu/EditModalUser/EditModalUser.styled';
import { SearchIconStyled } from '../DesktopMenu/DesktopMenu.styles';
import logo from '../../../images/icons/logo_Desktop.svg';

export const MobileMenu = ({ openState, handleMenuClick, children }) => {

  useEffect(() => {
    if (openState) {
      const handleKeyDown = e => {

        if (e.code === 'Escape') {
          handleMenuClick();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => { document.removeEventListener('keydown', handleKeyDown); }
    }
  }, [handleMenuClick, openState]);

  useEffect(() => {
  if (openState) {
    const scrollY = window.scrollY;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
    };
  }
  }, [openState]);

  return (
    <MobileMenuSection className={openState ? 'open' : ''}>
      <MobileMenuHeader onClick={handleMenuClick}>
        <LinkLogo to="/main">
          <NavLogo src={logo} alt="logo" width={40} />
        </LinkLogo>
        <button>
          <CloseButtonStyled style={{position: 'static'}} />
        </button>
      </MobileMenuHeader>

      <NavStyled>
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
            bottom: 50,
          }}
        >
          {children}
        </div>
      </NavStyled>
    </MobileMenuSection>
  );
};
