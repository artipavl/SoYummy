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
        <LinkLogo to="/">
          <NavLogo src={logo} alt='logo' width={40} />
        </LinkLogo>
        <button onClick={handleMenuClick}>
          <CrossImg src={cross} alt='close menu' width={32} />
        </button>

      </MobileMenuHeader>


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


