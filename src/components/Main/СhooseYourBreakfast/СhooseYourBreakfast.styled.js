import styled from 'styled-components';
import PlateMobile from 'images/MainPage/bg/plateMobile.webp';
import PlateMobileRetina from 'images/MainPage/bg/plateMobileRetina.webp';
import PlateTablet from 'images/MainPage/bg/plateTablet.webp';
import PlateTabletRetina from 'images/MainPage/bg/plateTabletRetina.webp';
import PlateDesktop from 'images/MainPage/bg/plateDesktop.webp';
import PlateDesktopRetina from 'images/MainPage/bg/plateDekctopRetina.webp';

import ArrowDesc from 'images/MainPage/bg/GroupDeck.svg';

// import ArrowTab from 'images/MainPage/HeroMain/curlyArrow.png';
// import ArrowDesc from 'images/MainPage/HeroMain/curlyArrow-desc.png';

import { NavLink } from 'react-router-dom';

export const So = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;

  text-align: center;
  letter-spacing: -0.005em;

  color: ${props => props.theme.colors.accentCurrent};

  @media ${props => props.theme.device.tablet} {
    font-size: 72px;
    line-height: 72px;
  }
  @media ${props => props.theme.device.desktop} {
    font-size: 100px;
    line-height: 100px;
  }
`;

export const Yummy = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;

  text-align: center;
  letter-spacing: -0.005em;

  color: ${props => props.theme.colors.text};

  @media ${props => props.theme.device.tablet} {
    font-size: 72px;
    line-height: 72px;
  }
  @media ${props => props.theme.device.desktop} {
    font-size: 100px;
    line-height: 100px;
  }
`;

export const Ptxt = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.text};
  width: 248px;
  text-align: center;
  margin: auto;
  margin-top: 24px;

  @media (max-width: 768px) {
    margin-bottom: 14px;
  }

  @media ${props => props.theme.device.tablet} {
    font-size: 14px;
    line-height: 18px;
    width: 362px;
    text-align: start;
    margin-left: 0;
  }
  @media ${props => props.theme.device.desktop} {
    font-size: 18px;
    line-height: 24px;
    width: 465px;
  }
`;

export const BoxOne = styled.div`
  padding-top: 60px;

  @media ${props => props.theme.device.tablet} {
    grid-area: 1 / 1 / 3 / 2;
  }
  @media ${props => props.theme.device.desktop} {
    padding-top: 100px;
    padding-bottom: 50px;
  }
`;

export const BoxTwo = styled.div`
  @media ${props => props.theme.device.tablet} {
    grid-area: 1 / 2 / 4 / 3;
  }
  @media ${props => props.theme.device.desktop} {
  }
`;

export const PlateTitleBox = styled.div`
  background-color: ${props => props.theme.colors.plateTitleBoxBgColor};

  position: relative;

  border-radius: 8px;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 19px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-left: 88px;
  margin-bottom: 91px;
  width: 225px;
  z-index: 0;
  @media ${props => props.theme.device.tablet} {
    width: 260px;
    margin-left: 74px;
    margin-bottom: 38px;
  }
  @media ${props => props.theme.device.desktop} {
    width: 298px;
    margin-left: 0px;
    margin-bottom: 89px;
  }

  ::after {
    @media ${props => props.theme.device.tablet} {
      z-index: 50;
      content: ' ';
      position: absolute;

      height: 100px;
      width: 136px;
      top: 85.5px;
      right: 47px;

      background-size: cover;
      background-repeat: no-repeat;
      background-image: url(${ArrowDesc});
      background-repeat: no-repeat;
      overflow: visible;
    }

    @media ${props => props.theme.device.desktop} {
      width: 220px;
      height: 148px;
      top: 77px;
      right: 45px;
    }
  }
`;

export const Title = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 12px;
  line-height: 18px;

  letter-spacing: -0.24px;

  color: ${props => props.theme.colors.plateTitleTextColor};

  & span {
    color: ${props => props.theme.colors.accentCurrent};
  }
  @media ${props => props.theme.device.tablet} {
    font-size: 14px;
    line-height: 20px;
  }
  @media ${props => props.theme.device.desktop} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Link = styled(NavLink)`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;

  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.2px;
  z-index: 100;

  color: ${props => props.theme.colors.plateTitleTextColor};
`;

export const PlateBox = styled.div`
  position: relative;
  width: 320px;
  height: 296px;
  display: flex;
  align-items: flex-end;

  background-image: url(${PlateMobile});
  background-size: 320px 296px;
  background-repeat: no-repeat;
  background-position: left;
  @media ${props => props.theme.retinaBackgroundImage} {
    background-image: url(${PlateMobileRetina});
  }

  @media ${props => props.theme.device.tablet} {
    width: 368px;
    height: 351px;
    background-size: 368px 351px;
    background-image: url(${PlateTablet});
    @media ${props => props.theme.retinaBackgroundImage} {
      background-image: url(${PlateTabletRetina});
    }
  }
  @media ${props => props.theme.device.desktop} {
    justify-content: flex-end;
    width: 640px;
    height: 539px;
    background-size: 578px 539px;
    background-image: url(${PlateDesktop});
    @media ${props => props.theme.retinaBackgroundImage} {
      background-image: url(${PlateDesktopRetina});
    }
  }
`;

// export const Arrow = styled.div`
//   display: none;
//   @media ${props => props.theme.device.tablet} {
//     content: '';
//     display: block;
//     position: absolute;
//     z-index: 100;
//     width: 136px;
//     height: 72px;
//     bottom: 50px;
//     right: 55px;
//     background-image: url(${ArrowTab});
//   }

//   @media ${props => props.theme.device.desktop} {
//   }
// `;
