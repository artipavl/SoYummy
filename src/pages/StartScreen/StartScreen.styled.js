//Done
import { NavLink } from "react-router-dom"
import styled from 'styled-components';
import BgDesktop from '../../images/bg/mainBG_Desktop.webp';
import BgDesktopRetina from '../../images/bg/mainBG_Desktop_2x.webp';
import BgTablet from '../../images/bg/mainBG_Tablet.webp';
import BgTabletRetina from '../../images/bg/mainBG_Tablet_2x.webp';
import Bgmobile from '../../images/bg/mainBG_Mobile.webp';
import BgmobileRetina from '../../images/bg/mainBG_Mobile_2x.webp';


export const StartScreenSection = styled.section`
  font-family: 'Poppins';
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${props => props.theme.colors.textWhite};
  height: 100vh;
  text-align: center;
  background-image: url('${Bgmobile}');

  @media ${props => props.theme.retinaBackgroundImage} {
      background-image: url('${BgmobileRetina}');
  }

  @media ${props => props.theme.device.tablet} {
    background-image: url('${BgTablet}');


    @media ${props => props.theme.retinaBackgroundImage} {
        background-image: url('${BgTabletRetina}');
      }
  }

  @media ${props => props.theme.device.desktop} {
    background-image: url('${BgDesktop}');

    @media ${props => props.theme.retinaBackgroundImage} {
      background-image: url('${BgDesktopRetina}');
  }

}

`
export const Container = styled.div`
    padding-top: 274px;
    padding-bottom: 257px;
    padding-right: 35px;
    padding-left: 35px;
    max-width: 1440px;
    margin: 0 auto;

    @media ${props => props.theme.device.tablet} {

  }
`
export const StartScreenLogo = styled.img`
  margin: 0 auto;
  width: 54px;

  @media ${props => props.theme.device.tablet} {
    width: 68px;
  }
  @media ${props => props.theme.device.desktop} {
    width: 44px;
  }

`

export const StartSubtitle = styled.p`
  font-weight: ${props => props.theme.fontWeights.bolt};
  margin-top: 28px;
  font-size: 24px;
  line-height: 1.29;
  @media ${props => props.theme.device.tablet} {
    margin-top: 44px;
    font-size: 28px;
  }

`

export const StartTitle = styled.h1`
  display: block;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: -0.02em;
  margin-top: 14px;
  font-size: 14px;
  line-height: 1.29;


  @media ${props => props.theme.device.mobile} {
    width: 305px;
  }

  @media ${props => props.theme.device.tablet} {
    width: 505px;
    line-height: 1.33;
    font-size: 18px;
  }
  @media ${props => props.theme.device.desktop} {
    width: 540px;
  }

`
export const StartNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 44px;

  @media ${props => props.theme.device.tablet} {
    margin-top: 40px;
  }

`
export const StyledLink = styled(NavLink)`

  background-color: ${props => props.theme.colors.accent};
  color: rgb(255, 255, 255);
  border-radius: 24px 44px;
  border: 1px solid ${props => props.theme.colors.accent};
  /* border: 1px solid ${props => props.theme.colors.textWhite}; */
  transition: all 250ms linear;
  padding: 12px 24px;
  font-size: 14px;

  &:last-child {
    margin-left: 14px;
    background-color: transparent;
    border: 1px solid ${props => props.theme.colors.textWhite};
    &:hover, &:focus {
      color: ${props => props.theme.colors.accent};
      border: 1px solid ${props => props.theme.colors.accent};
      background-color: transparent;
    }
  }

  &:hover, &:focus {
    background-color: ${props => props.theme.colors.accentDark};
    border: 1px solid ${props => props.theme.colors.accentDark};

  }

  @media ${props => props.theme.device.tablet} {
    padding: 22px 44px;
    font-size: 16px;

    &:last-child {
    margin-left: 18px;
    }
  }

`


