import { NavLink } from "react-router-dom"
import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin: 0 auto;

  @media ${props => props.theme.device.mobile} {
    width: 343px;
    padding-right: 16px;
    padding-left: 16px;
    padding-top: 18px;
  }
  @media ${props => props.theme.device.tablet} {
    width: 704px;
    padding-right: 32px;
    padding-left: 32px;

  }
   @media ${props => props.theme.device.desktop} {
    width: 1240px;
    padding-right: 100px;
    padding-left: 100px;
  }
`
export const LinkLogo = styled(NavLink)`
`

export const NavLogo = styled.img`
@media ${props => props.theme.device.mobile}{
    display: none;
}
@media ${props => props.theme.device.tablet}{
    display: block;
}

`
export const NavLogoLite = styled.img`
  @media ${props => props.theme.device.tablet}{
    display: none;
}
`



export const SearchText = styled.p`
    font-size: 18px;

    @media ${props => props.theme.device.tablet} {
      display: none;
    }
`

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
@media ${props => props.theme.device.mobile} {
  margin-left: 166px;
}
@media ${props => props.theme.device.tablet} {
  margin-left: 477px;
}
@media ${props => props.theme.device.desktop} {
  margin-left: 226px;
}
`

export const UserIcon = styled.img`
  @media ${props => props.theme.device.mobile} {
  width: 34px;
  hieght: 34px;
}
 @media ${props => props.theme.device.tablet} {
  width: 44px;
  hieght: 44px;
}
`
export const UserName = styled.p`
  @media ${props => props.theme.device.mobile} {
  margin-left: 14px;
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeights.bold};
}
`

export const ToogleWrap = styled.div`
  @media ${props => props.theme.device.mobile} {
    display: none;
  }
  @media ${props => props.theme.device.desktop} {
    display: block;
    margin-left: auto;
}
`
export const Burger = styled.button`
  @media ${props => props.theme.device.mobile} {
    width: 28px;
    height: 28px;
    margin-left: auto;
  }
  @media ${props => props.theme.device.desktop} {
  display: none;
}
`


