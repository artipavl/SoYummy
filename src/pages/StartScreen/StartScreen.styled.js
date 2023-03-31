import { NavLink } from "react-router-dom"
import styled from 'styled-components';
import { theme } from "../../constants";

console.log(theme);
const { colors } = theme;

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

export const StartScreenSection = styled.section`
  color: ${colors.white};
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  background-color: ${colors.bgDark};
  background-image: url('../images/bg/mainBG_Desktop.webp')
  width: 1440px;
  padding-top: 214px;
  padding-bottom: 214px;
  background-size: 1440px 770px;
  width: 1440px;
  height: 770px
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
  margin-top: 44px;
  font-size: 28px;
`

export const StartTitle = styled.h1`
  display: block;
  margin: 0 auto;
  margin-top: 14px;
  width: 540px;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: -0.02em;
  line-height: 1.33;

`
export const StartNav = styled.nav`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

`
export const StyledLink = styled(NavLink)`
  padding: 22px 44px;
  background-color: transparent;
  color: rgb(255, 255, 255);
  border-radius: 24px 44px;
  border: 1px solid rgb(250, 250, 250);
  transition: border-color 250ms linear, background-color 250ms linear ;

  &:hover, &:focus {
    background-color: ${colors.accent};
    border-color: ${colors.accent};
  }

  :last-child {
    margin-left: 18px;
  }

`



