import { NavLink } from "react-router-dom"
import styled from 'styled-components';
import userIconBG from '../../images/icons/user-icon.svg'

export const Header = styled.header`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  width: 100%;
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 18px;

  z-index: 999;

  @media ${props => props.theme.device.mobile} {
    width: 375px;
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
export const Container = styled.div`
  max-width: 1440px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  `


export const LinkLogo = styled(NavLink)`
`

export const NavLogo = styled.img`
  display: none;
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

export const UserWrapButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 166px;
  cursor: pointer;
   @media ${props => props.theme.device.mobile} {

   }

    @media ${props => props.theme.device.tablet} {
      margin-left: 477px;
    }
    @media ${props => props.theme.device.desktop} {
      margin-left: 226px;
    }
`

export const UserIcon = styled.img`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  overflow: hidden;

 @media ${props => props.theme.device.tablet} {
  width: 44px;
  height: 44px;
}
`
export const UserName = styled.p`
  margin-left: 14px;
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeights.bold};
  @media ${props => props.theme.device.tablet} {
    font-size: 14px;
}

`

export const TempAvatar = styled.label`
  position: relative;
  margin: 0 auto;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.whiteMuted};
  background-image: url('${userIconBG}');
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media ${props => props.theme.device.tablet} {
  width: 44px;
  height: 44px;
}

`
export const ToogleWrap = styled.div`
    display: none;
  @media ${props => props.theme.device.desktop} {
    display: block;
    margin-left: auto;
}
`
export const Burger = styled.button`
    width: 28px;
    height: 28px;
    margin-left: auto;

  @media ${props => props.theme.device.desktop} {
  display: none;
}
`


