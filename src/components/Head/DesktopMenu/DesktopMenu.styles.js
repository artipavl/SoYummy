import { NavLink } from "react-router-dom"
import styled from 'styled-components';
import {ReactComponent as Search} from '../../../images/icons/search_Icon.svg'

export const NavStyled = styled.nav`
  display: none;

@media ${props => props.theme.device.desktop}{
  display: block;
  margin-left: 187px;
}

`
export const NavItems = styled.ul`
  display: flex;

`
export const NavItem = styled.li`
  :not(:first-child) {
    margin-left: 30px;
}

  .active {
    color: ${props => props.theme.colors.accentCurrent};
  }
  .active svg {
    path {
      stroke: ${props => props.theme.colors.accentCurrent}
    }
  }

`
export const Navigator = styled(NavLink)`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  /* color: ${props => props.theme.colors.text}; */
  color: ${props => props.recipeid ? props.theme.colors.recipeHeaderList : props.theme.colors.text};
  font-weight: 500;
  font-size: 14px;
  line-height: 1.6;
  transition: color 250ms linear;
    &:hover, &:focus {
      color: ${props => props.theme.colors.accentCurrent};
}
`

export const SearchIconStyled = styled(Search)`


  path {
    /* stroke: ${props => props.theme.colors.searchIconStyled}; */
    stroke: ${props => props.recipeid ? props.theme.colors.recipeHeaderList : props.theme.colors.searchIconStyled};
    transition: stroke 250ms linear;
  }
  :hover path,
  :focus path {
    stroke: ${props => props.theme.colors.accentCurrent};
  }


`
export const SearchIconStyledMob = styled(Search)`


  path {
    stroke: ${props => props.theme.colors.text};
    transition: stroke 250ms linear;
  }
  :hover path,
  :focus path {
    stroke: ${props => props.theme.colors.accentCurrent};
  }


`
