import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import emailIcon from '../../images/icons/email.svg';

import bgMobile from "../../images/bg/footerBG_mobile.webp";
import bgMobileRetina from "../../images/bg/footerBG_mobile@2x.webp";
import bgTablet from '../../images/bg/footerBG_Tablet.webp';
import bgTabletRetina from '../../images/bg/footerBG_Tablet@2x.webp';
import bgDesktop from '../../images/bg/footerBG_Desktop.webp'
import bgDesktopRetina from '../../images/bg/footerBG_Desktop@2x.webp'


export const FooterSection = styled.div`
  background-color: ${props => props.theme.colors.accentDark};
  padding-top: 28px;
  padding-bottom: 28px;
    @media  ${props => props.theme.device.tablet} {
      padding-top: 50px;
      padding-bottom: 24px;
      padding-left: 32px;
      padding-right: 32px;
  }
   @media  ${props => props.theme.device.desktop} {
      padding-top: 64px;
      padding-bottom: 50px;
      padding-left: 100px;
      padding-right: 100px;
  }


`
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

`
export const LogoCapLinkWrap = styled.div`
  display: block;

  @media ${props => props.theme.device.tablet} {
    display: flex;
    justify-content: start;
  }


`

export const LogoCapLinkFormWrap = styled.div`
  display: block;
  @media ${props => props.theme.device.desktop} {
    display: flex;
    justify-content: space-between;
  }
`

export const LogoCapWrap = styled.div`
  display: block;
`
export const LogoLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    @media  ${props => props.theme.device.tablet} {
      justify-content: start;
    }

`

export const LogoImg = styled.img`
  @media  ${props => props.theme.device.tablet} {
    width: 44px;
    height: 44px;
  }
`

export const LogoTitle = styled.p`
  color: ${props => props.theme.colors.textWhite};
  margin-left: 8px;
  font-size: 18px;
  font-weight: ${props => props.theme.fontWeights.bold};

  @media  ${props => props.theme.device.tablet} {
    font-size: 28px;
    margin-left: 12px;
  }

`
export const AppCapabilitiesList = styled.ul`

  display: none;
  @media ${props => props.theme.device.tablet} {
    display: block;
    margin-top: 24px;
  }
  @media ${props => props.theme.device.tablet} {
    width: 418px;
  }


`
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
`

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
`

export const FooterLink = styled(NavLink)`
  padding-top: 7px;
  padding-bottom: 7px;
  color: ${props => props.theme.colors.textWhite};
  font-size: 14px;
  transition: color 250ms linear;
  &:hover, &:focus {
    color: ${props => props.theme.colors.accent}
  }

  .active{
    color: ${props => props.theme.colors.accent};
  }
  @media ${props => props.theme.device.tablet} {
    padding-top: 10px;
    padding-bottom: 10px;
  }
  @media ${props => props.theme.device.desktop} {
    margin-left: 159px;
  }

`

export const SubscFomrWrap = styled.div`
  @media ${props => props.theme.device.desktop} {
    width: 340px;
  }
`

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

`

export const FormFooter = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  @media ${props => props.theme.device.tablet} {
    margin-top: 72px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  @media ${props => props.theme.device.desktop} {
    display: block;
    margin-top: 28px;
  }
`

export const FormFooterInput = styled.input`
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  padding: 0;
  padding-left: 42px;
  width: 204px;
  height: 38px;
  background-color: transparent;
  background-image: url('${emailIcon}');
  background-repeat: no-repeat;
  background-position: 15px 13px;
  background-size: 16px 12px;
  color: inherit;
  font-size: inherit;
  border-radius: 6px;
  border: 1px solid rgba(236, 236, 236, 0.16);

  &::placeholder {
    background-image: url('${emailIcon}') no-repeat;
    font-size: 10px;
    font-weight: 400;
    color: ${props => props.theme.colors.textWhite};
    opacity: 1;

    @media ${props => props.theme.device.tablet} {
      font-size: 14px;
    }

    @media ${props => props.theme.device.desktop} {
      font-size: 18px;
    }
  }

  @media ${props => props.theme.device.tablet} {
    margin: 0;
    padding-left: 51px;
    width: 259px;
    height: 50px;
    background-position: 15px 12px;
    background-size: 20px 16px;
    background-position: 18px 15px;
  }
  @media ${props => props.theme.device.desktop}{
    width: 100%;
  }

`

export const FormFooterBtn = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 8px;
  padding: 11px 71px;
  font-size: 12px;
  background-color: ${props => props.theme.colors.accent} ;
  border-radius: 6px;
  transition: color 250ms linear;

  &:hover, &:focus {
    color: ${props => props.theme.colors.accentDark}
  }

  @media ${props => props.theme.device.tablet} {
    margin-top: 0;
    margin: 0;
    margin-left: 12px;
    padding: 16px 50px;
    font-size: 16px;
  }

  @media ${props => props.theme.device.desktop} {
    margin-left: 0;
    margin-top: 16px;
    width: 100%;
  }
`

export const SocialWrap = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 44px;
  @media ${props => props.theme.device.tablet} {
    margin-top: 38px;
  }
  @media ${props => props.theme.device.desktop} {
    margin-top: 41px;
  }

`
export const SocialIcon = styled.li`
  cursor: pointer;
  &:not(:first-child){
    margin-left: 10px;
  }

`

export const SocialLink = styled(NavLink)`
  color: white;
`

export const SocialImg = styled.img`
 fill: inherit;

`
export const SubFooterBgContainer = styled.div`

`
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

`

export const SubFooterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.accentDark};
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

`







