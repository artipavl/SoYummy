import styled from 'styled-components';
import { theme } from 'constants/theme';
import PlateMobile from 'images/MainPage/bg/plateMobile.webp';
import PlateMobileRetina from 'images/MainPage/bg/plateMobileRetina.webp';
import PlateTablet from 'images/MainPage/bg/plateTablet.webp';
import PlateTabletRetina from 'images/MainPage/bg/plateTabletRetina.webp';
import PlateDesktop from 'images/MainPage/bg/plateDesktop.webp';
import PlateDesktopRetina from 'images/MainPage/bg/plateDekctopRetina.webp';

import { NavLink } from 'react-router-dom';

export const So = styled.span`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 60px;

  text-align: center;
  letter-spacing: -0.005em;

  color: ${theme.colors.accent};

  @media ${theme.device.tablet} {
    font-size: 72px;
    line-height: 72px;
  }
  @media ${theme.device.desktop} {
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

  color: ${theme.colors.text};
  @media ${theme.device.tablet} {
    font-size: 72px;
    line-height: 72px;
  }
  @media ${theme.device.desktop} {
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
  color: ${theme.colors.text};
  width: 248px;
  margin-top: 24px;

  @media (max-width: 768px) {
    margin-bottom: 14px;
  }

  @media ${theme.device.tablet} {
    font-size: 14px;
    line-height: 18px;
    width: 362px;
  }
  @media ${theme.device.desktop} {
    font-size: 18px;
    line-height: 24px;
    width: 465px;
  }
`;

export const BoxOne = styled.div`
padding-top: 60px;

  @media ${theme.device.tablet} {
    grid-area: 1 / 1 / 3 / 2;
  }
  @media ${theme.device.desktop} {

    padding-top: 100px;
    padding-bottom: 50px;

  }
`;

export const BoxTwo = styled.div`
  @media ${theme.device.tablet} {
    grid-area: 1 / 2 / 4 / 3;
  }
  @media ${theme.device.desktop} {
  }
`;

export const PlateTitleBox = styled.div`
  display: block;

  background-color: ${theme.colors.white};
  border-radius: 8px;
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 19px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 89px;
  width: 225px;
  @media ${theme.device.tablet} {
    width: 260px;
  }
  @media ${theme.device.desktop} {
    width: 298px;
  }
`;

export const Title = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${theme.fontWeights.medium};
  font-size: 12px;
  line-height: 18px;

  letter-spacing: -0.24px;
  color: ${theme.colors.textDark};

  & span {
    color: ${theme.colors.accent};
  }
  @media ${theme.device.tablet} {
    font-size: 14px;
    line-height: 20px;
  }
  @media ${theme.device.desktop} {
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

  color: ${theme.colors.textDark};
`;

export const PlateBox = styled.div`
  width: 320px;
  height: 296px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  background-image: url(${PlateMobile});
  background-size: 320px 296px;
  background-repeat: no-repeat;
  background-position: left;
  @media ${theme.retinaBackgroundImage} {
    background-image: url(${PlateMobileRetina});
  }

  @media ${theme.device.tablet} {
    width: 378px;
    height: 351px;
    background-size: 378px 351px;
    background-image: url(${PlateTablet});
    @media ${theme.retinaBackgroundImage} {
      background-image: url(${PlateTabletRetina});
    }
  }
  @media ${theme.device.desktop} {
    width: 640px;
    height: 539px;
    background-size: 578px 539px;
    background-image: url(${PlateDesktop});
    @media ${theme.retinaBackgroundImage} {
      background-image: url(${PlateDesktopRetina});
    }
  }
`;
