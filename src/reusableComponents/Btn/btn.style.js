import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Btn = styled(NavLink)`
  background-color: ${props =>
    ({
      normal: props.theme.colors.dark,
      dark: props.theme.colors.accent,
      transparent: 'transparent',
    }[props.variant])};

  clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%);
  padding: 14px 6px;

  border: none;
  color: ${props => props.theme.colors.white};
  transition: all 250ms linear;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.normal};

  font-size: 10px;
  line-height: 15px;

  @media ${props => props.theme.device.tablet} {
    padding: 32px 12px;
    font-size: 14px;
    line-height: 21px;
  }

  @media ${props => props.theme.device.desktop} {
    padding: 50px 42px;
    font-size: 16px;
    line-height: 24px;
  }

  :hover,
  :focus {
    background-color: ${props =>
      ({
        normal: props.theme.colors.accent,
        dark: props.theme.colors.dark,
        transparent: props.theme.colors.accent,
      }[props.variant])};

    @media ${props => props.theme.device.mobile} {
      font-size: 14px;
      line-height: 21px;
    }

    @media ${props => props.theme.device.tablet} {
      font-size: 16px;
      line-height: 24px;
    }
    @media ${props => props.theme.device.desktop} {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;