import { NavLink } from "react-router-dom"
import styled from 'styled-components';
import BgDesktop from '../../images/bg/mainBG_Desktop.webp';
import BgDesktopRetina from '../../images/bg/mainBG_Desktop_2x.webp';
import BgTablet from '../../images/bg/mainBG_Tablet.webp';
import BgTabletRetina from '../../images/bg/mainBG_Tablet_2x.webp';
import Bgmobile from '../../images/bg/mainBG_Mobile.webp';
import BgmobileRetina from '../../images/bg/mainBG_Mobile_2x.webp';

const size = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1440px'
}


export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
};

export const retina = `(min-device-pixel-ratio: 2),
                        (min-resolution: 192dpi),
                        (min-resolution: 2dppx)`


export const StartScreenSection = styled.section`
  color: ${props => props.theme.colors.textWhite};
  background-color: ${props => props.theme.colors.bgDark};
  background-repeat: no-repeat;
  background-size: contain;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media ${device.mobile} {
    background-image: url('${Bgmobile}');
    background-size: 375px 812px;
    max-width: 375px;

    padding-top: 274px;
    padding-bottom: 257px;

    @media ${retina} {
      background-image: url('${BgmobileRetina}');
    }
  }

  @media ${device.tablet} {
    background-image: url('${BgTablet}');
    background-size: 768px 1024px;
    max-width: 768px;

    padding-top: 342px;
    padding-bottom: 342px;

    @media ${device.tablet} {
      background-image: url('${BgTabletRetina}');
    }


  }
  @media ${device.desktop} {
    padding-top: 214px;
    padding-bottom: 216px;
    background-image: url('${BgDesktop}');
    background-size: 1440px 770px;
    min-width: 1440px;
    background-size: cover;
    @media ${retina} {
      background-image: url('${BgDesktopRetina}');
  }
}

`
export const StartScreenLogo = styled.img`
  margin: 0 auto;
  @media ${device.mobile} {
    width: 54px;
  }
  @media ${device.tablet} {
    width: 68px;
  }
  @media ${device.desktop} {
    width: 44px;
  }

`

export const StartSubtitle = styled.p`
  font-weight: ${props => props.theme.fontWeights.bolt};
  @media ${device.mobile} {
    margin-top: 28px;
    font-size: 24px;
  }
  @media ${device.tablet} {
    margin-top: 44px;
    font-size: 28px;
  }

`

export const StartTitle = styled.h1`
  display: block;
  margin: 0 auto;
  font-weight: 400;
  letter-spacing: -0.02em;
  @media ${device.mobile} {
    margin-top: 14px;
    font-size: 14px;
    line-height: 1.29;
    width: 305px;
  }
  @media ${device.tablet} {
    width: 505px;
    line-height: 1.33;
    font-size: 18px;
  }
  @media ${device.desktop} {
    width: 540px;
  }

`
export const StartNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.mobile} {
    margin-top: 44px;
  }
  @media ${device.tablet} {
    margin-top: 40px;
  }

`
export const StyledLink = styled(NavLink)`
  padding: 22px 44px;
  background-color: transparent;
  color: rgb(255, 255, 255);
  border-radius: 24px 44px;
  border: 1px solid #FAFAFA;
  transition: all 250ms linear;

  &:hover, &:focus {
    background-color: #8BAA36;
    border: 1px solid #8BAA36;
  }
  @media ${device.mobile} {
    padding: 12px 24px;
    font-size: 14px;

    &:last-child {
    margin-left: 14px;
  }
  @media ${device.tablet} {
    padding: 22px 44px;
    font-size: 16px;

    &:last-child {
    margin-left: 18px;
    }
  }

  }
`


