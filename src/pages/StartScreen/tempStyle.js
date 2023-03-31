import { NavLink } from "react-router-dom";
import styled from 'styled-components';

import { theme } from "../constants/";

console.log(theme)

const size = {
  mobile: '320px',
  tablet: '768px',
  desktop: '1440px'
}

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  desktop: `(max-width: ${size.desktop})`,
};

const colors = {
  green: "#8BAA36",
  white: "#FAFAFA"
}

export const StartScreenSection = styled.section`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: #22252A;

  @media ${device.mobile} {

    background-size: 375px 814px;
    padding: 274px 36px 257px 36px
  }
  @media ${device.tablet} {
    padding-top: 342px;
    padding-bottom: 342px;
    background-size: 768px 1024px;
  }
  @media ${device.desktop} {
    width: 1440px;
    padding-top: 214px;
    padding-buttom: 214px;
    background-size: 1440px 770px;
    width: 1440px;
    height: 770px;
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

  font-weight: 600;
  color: ${colors.white};
  margin-top: 28px;
  letter-spacing: -0.02em;
  @media ${device.mobile} {
    font-size: 24px;
  }
  @media ${device.tablet} {
    font-size: 56px;
  }
  @media ${device.desktop} {
    margin-top: 44px;
    font-size: 28px;
  }
`

export const StartTitle = styled.h1`

  display: block;
  margin: 0 auto;
  @media ${device.mobile} {
    margin-top: 14px;
    font-size: 14px;
    width: 305px;

  }


  max-width: 540px;
  font-weight: 400;
  font-size: 18px;
  color: ${colors.white};
  letter-spacing: -0.02em;
  line-height: 1.33;
`
export const StartNav = styled.nav`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobile} {
    margin-top: 44px;
  }
  @media ${device.tablet} {

}


`
export const StyledLink = styled(NavLink)`
  color: ${colors.white};
  background-color: transparent;
  color: rgb(255, 255, 255);
  border-radius: 24px 44px;
  border: 1px solid rgb(250, 250, 250);
  transition: border-color 250ms linear, background-color 250ms linear ;

  @media ${device.mobile} {
    font-size: 14px;
    padding: 12px 24px;
    &:last-child {
    margin-left: 12px;
  }


  padding: 22px 44px;

  font-weight: 400;
  font-size: 16px;


  &:hover, &:focus {
    background-color: ${colors.green};
    border-color: ${colors.green};
  }
  @media ${device.tablet} {
  &:last-child {
    margin-left: 18px;
  }
  }


`



