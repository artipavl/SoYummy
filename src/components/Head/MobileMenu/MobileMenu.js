import logo from '../../../images/icons/logo_Desktop.svg';
import cross from '../../../images/icons/cross.svg'
import search from '../../../images/icons/search_Icon.svg';



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
  SearchIcon,
  SearchText,
} from './MobileMenu.styled'



export const MobileMenu = ({openState, handleMenuClick, children}) => {
  return (
    <MobileMenuSection className={openState ? "open" : ""}>
      <MobileMenuHeader>
        <LinkLogo to="/main">
          <NavLogo src={logo} alt='logo' width={40} />
        </LinkLogo>
        <button onClick={handleMenuClick}>
          <CrossImg src={cross} alt='close menu' width={32} />
        </button>

      </MobileMenuHeader>


      <NavStyled >
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
              <SearchIcon src={search} alt="search icon" width={24} height={24} />
              <SearchText>Search</SearchText>
            </Navigator>
          </NavItem>
        </NavItems>
        <div style={{
          position: 'absolute',
          bottom: 18
        }}>
          {children}
        </div>
      </NavStyled>
    </MobileMenuSection>
  );
}


