import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// import { ReactComponent as emailIcon } from '../../images/icons/email.svg';

import bgMobile from "../../images/bg/footerBG_mobile.webp";
import bgMobileRetina from "../../images/bg/footerBG_mobile@2x.webp";
import bgTablet from '../../images/bg/footerBG_Tablet.webp';
import bgTabletRetina from '../../images/bg/footerBG_Tablet@2x.webp';
import bgDesktop from '../../images/bg/footerBG_Desktop.webp';
import bgDesktopRetina from '../../images/bg/footerBG_Desktop@2x.webp';



export const FooterSection = styled.div`
  position: relative;
  background-color: ${props => props.theme.colors.accentDark};
  padding-top: 28px;
  padding-bottom: 28px;
  z-index: 3;


  @media ${props => props.theme.device.tablet} {
    padding-top: 50px;
    padding-bottom: 24px;
    padding-left: 32px;
    padding-right: 32px;
  }
  @media ${props => props.theme.device.desktop} {
    min-height: auto;
    padding-top: 64px;
    padding-bottom: 50px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;

export const Container = styled.div`
  color: ${props => props.theme.colors.textWhite};

  @media ${props => props.theme.device.mobile} {
    display: block;
    margin: 0 auto;
    width: 375px;
  }

  @media ${props => props.theme.device.tablet} {
    width: 704px;
  }
  @media ${props => props.theme.device.desktop} {
    width: 1240px;
  }
`;
export const LogoCapLinkWrap = styled.div`
  display: block;

  @media ${props => props.theme.device.tablet} {
    display: flex;
    justify-content: start;
  }
`;

export const LogoCapLinkFormWrap = styled.div`
  display: block;
  @media ${props => props.theme.device.desktop} {
    display: flex;
    justify-content: space-between;
  }
`;

export const LogoCapWrap = styled.div`
  display: block;
`;
export const LogoLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${props => props.theme.device.tablet} {
    justify-content: start;
  }
`;

export const LogoImg = styled.img`
  @media ${props => props.theme.device.tablet} {
    width: 44px;
    height: 44px;
  }
`;

export const LogoTitle = styled.p`
  color: ${props => props.theme.colors.textWhite};
  margin-left: 8px;
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.bold};

  @media ${props => props.theme.device.tablet} {
    font-size: 28px;
    margin-left: 12px;
  }
`;
export const AppCapabilitiesList = styled.ul`
  display: none;
  @media ${props => props.theme.device.tablet} {
    display: block;
    margin-top: 24px;
  }
  @media ${props => props.theme.device.tablet} {
    width: 418px;
  }
`;
export const AppCapabilitiesItem = styled.li`
  list-style-type: disc;
  margin-left: 32px;
  font-size: 14px;
  letter-spacing: -0.02em;
  line-height: 1.33;
  &:not(:first-child) {
    margin-top: 10px;
  }
  @media ${props => props.theme.device.desktop} {
    font-size: 18px;
    &:not(:first-child) {
      margin-top: 14px;
    }
  }
`;

export const FooterLinkWrap = styled.ul`
  margin-top: 32px;
  text-align: center;
  @media ${props => props.theme.device.tablet} {
    margin-top: 0;
    text-align: start;
    margin-left: 173px;
  }
  @media ${props => props.theme.device.desktop} {
    margin-left: 0;
  }
`;

export const FooterLink = styled(NavLink)`
  padding-top: 7px;
  padding-bottom: 7px;
  color: ${props => props.theme.colors.textWhite};
  font-size: 14px;
  transition: color 250ms linear;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }

  .active {
    color: ${props => props.theme.colors.accent};
  }
  @media ${props => props.theme.device.tablet} {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  @media ${props => props.theme.device.desktop} {
    margin-left: 159px;
  }
`;

export const SubscFomrWrap = styled.div`
  @media ${props => props.theme.device.desktop} {
    width: 340px;
  }
`;

export const SubscribeWrap = styled.div`
  display: none;
  @media ${props => props.theme.device.desktop} {
    display: block;
    h4 {
      font-size: 18px;
      font-weight: 700;
    }
    p {
      margin-top: 14px;
      font-size: 14px;
      line-height: 1.29;
    }
  }
`;


export const SocialWrap = styled.div`
   margin-top: 44px;
  @media ${props => props.theme.device.tablet} {
    margin-top: 38px;
  }
  @media ${props => props.theme.device.desktop} {
    margin-top: 41px;
  }
`


export const SubFooterBgContainer = styled.div``;
export const SubFooter = styled.div`
  padding-top: 28px;
  padding-bottom: 28px;
  background-color: ${props => props.theme.colors.bgWhite};
  background-image: url('${bgMobile}');
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: 210px 172px;

  @media ${props => props.theme.retinaBackgroundImage} {
    background-image: url('${bgMobileRetina}');
  }

  @media ${props => props.theme.device.tablet} {
    padding-top: 32px;
    padding-bottom: 32px;
    background-image: url('${bgTablet}');
    background-size: 353px 290px;

    @media ${props => props.theme.retinaBackgroundImage} {
      background-image: url('${bgTabletRetina}');
    }
  }
  @media ${props => props.theme.device.desktop} {
    padding-top: 50px;
    padding-bottom: 50px;
    background-image: url('${bgDesktop}');
    background-size: 424px 348px;
    @media ${props => props.theme.retinaBackgroundImage} {
      background-image: url('${bgDesktopRetina}');
    }
  }
`;

export const SubFooterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.subFooterText};
  font-size: 10px;

  p:not(:first-child) {
    margin-left: 14px;
    @media ${props => props.theme.device.tablet} {
      margin-left: 28px;
    }
  }

  @media ${props => props.theme.device.tablet} {
    font-size: 14px;
  }
`;
