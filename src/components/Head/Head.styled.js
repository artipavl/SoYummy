import { NavLink } from "react-router-dom"
import styled, {keyframes} from 'styled-components';
import userIconBG from '../../images/icons/user-icon.svg';
import { ReactComponent as BurgerIcon } from '../../images/icons/burger.svg';

const fadeIn = keyframes`
  from {
    opacity: 0;
    /* transform: translateY(0%); */
  }
  to {
    opacity: 1;
    /* transform: translateY(100%); */
  }
`;

export const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  padding-top: 18px;
  width: 100%;
  font-family: 'Poppins';
  z-index: 999;
  animation: ${fadeIn} 0.3s ease-in-out;

`
export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 375px;
  margin: 0 auto;
  padding-left: 16px;
  padding-right: 16px;
  @media (min-width: 280px) and (max-width: 374px) {
    min-width: 280px;
    max-width: 320px;
  }
  @media ${props => props.theme.device.tablet} {
    width: 768px;
    padding-right: 32px;
    padding-left: 32px;
  }
  @media ${props => props.theme.device.desktop} {
    width: 1440px;
    padding-right: 100px;
    padding-left: 100px;
  }

`

export const LinkLogo = styled(NavLink)`
  width: 40px;
  height: 40px;
  @media ${props => props.theme.device.tablet}{
    width: 44px;
    height: 44px;
  }

`

export const NavLogo = styled.img`
  /* display: none;
    @media ${props => props.theme.device.tablet}{
      display: block;
} */
`

// export const NavLogoLite = styled.img`
//   @media ${props => props.theme.device.tablet}{
//     display: none;
// }
// `
export const SearchText = styled.p`
    font-size: 18px;
    @media ${props => props.theme.device.tablet} {
      display: none;
    }
`
export const UserToogleWrap = styled.div `
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const UserWrapButton = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
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
  color: ${props => props.pathname.includes("/main") && window.outerWidth > 1439 && window.outerWidth < 1930 ? "#22252A" : props.pathname.includes("/recipe") ? props.theme.colors.recipeHeaderList : props.theme.colors.dark};
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
    margin-left: 50px;
}
`
export const Burger = styled.button`
    width: 28px;
    height: 28px;
    margin-left: 50px;
  @media (min-width: 280px) and (max-width: 374px) {
    margin-left: 15px;
  }
  @media ${props => props.theme.device.desktop} {
  display: none;
}
`

export const BurgerIconStyled = styled(BurgerIcon)`
  width: 28px;
  height: 28px;
  @media ${props => props.theme.device.tablet} {
    width: 32px;
    height: 32px;
  }
  path {
    stroke: ${props => props.theme.colors.text}
  }
`
