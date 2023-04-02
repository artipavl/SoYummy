import { NavLink } from "react-router-dom"
import styled from 'styled-components';

export const NavStyled = styled.nav`
@media ${props => props.theme.device.mobile}{
  display: none
}

@media ${props => props.theme.device.desktop}{
  display: block;
  margin-left: 187px;
}

`
export const NavItems = styled.ul`
  display: flex;
}
`
export const NavItem = styled.li`
  :not(:first-child) {
    margin-left: 30px;
}

  &.active {
    color: ${props => props.theme.colors.accent};
  }

`
export const Navigator = styled(NavLink)`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;
  transition: color 250ms linear;
    &:hover, &focus {
      color: ${props => props.theme.colors.accent};
}
`
export const SearchIcon = styled.img`
fill: ${props => props.theme.colors.accentDark};
  &:hover, &focus {
    fill: ${props => props.theme.colors.accent};
}
`
