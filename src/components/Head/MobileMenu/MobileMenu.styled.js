import { NavLink } from "react-router-dom"
import styled from 'styled-components';

import BgMobile from '../../../images/bg/menuBG_Mobile.webp'
import BgMobileRetina from '../../../images/bg/menuBG_Mobile@2x.webp'
import BgTablet from '../../../images/bg/menuBG_Tablet.webp'
import BgTabletRetina from '../../../images/bg/menuBG_Tablet@2x.webp'

export const MobileMenuSection = styled.section`
  box-sizing: border-box;
  position: fixed;
  padding: 18px 16px;
  background-color: ${props => props.theme.colors.modes.white.accentMuted};
  background-image: url('${BgMobile}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100% 100%;
  top: 0;
  left: 0;
  transform: translateY(-100%);
  height: 100vh;
  width: 100vw;
  z-index: 999;
  opacity: 1;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out, transform 0.3s ease-in-out ;

  &.open {
    transform: translateY(0%);
    opacity: 1;
    visibility: visible;
  }

  @media ${props => props.theme.retinaBackgroundImage} {
    background-image: url('${BgMobileRetina}');
    }


  @media ${props => props.theme.device.tablet}{
    padding: 18px 32px;
    background-image: url('${BgTablet}');
    @media ${props => props.theme.retinaBackgroundImage} {
      background-image: url('${BgTabletRetina}');
    }

  }


@media ${props => props.theme.device.desktop}{
    display: none
}
`
export const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavStyled = styled.nav`
    margin-top: 124px;
    height: 100%;


`
export const LinkLogo = styled(NavLink)`
`
export const NavLogo = styled.img`
  width: 40px;
  height: 40px;

  @media ${props => props.theme.device.tablet} {
    width: 44px;
    height: 44px;
  }

`

export const NavItems = styled.ul`
`

export const NavItem = styled.li`
&.active {
    color: ${props => props.theme.colors.accent};
  }

`
export const Navigator = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
  color: ${props => props.theme.colors.text};
  font-size: 18px;
  line-height: 1.6;
  font-weight: ${props => props.theme.fontWeights.medium};
  transition: color 250ms linear;

  path {
    stroke: ${props => props.theme.colors.accentDark};
    transition: stroke 250ms linear;
  }

  :hover path,
  :focus path {
    stroke: ${props => props.theme.colors.accent};
  }

  &:hover, &:focus {
    color: ${props => props.theme.colors.accent};
  }

    @media ${props => props.theme.device.tablet} {
      font-size: 24px;
    }


`

export const SearchText = styled.p`
  margin-left: 8px;
`
