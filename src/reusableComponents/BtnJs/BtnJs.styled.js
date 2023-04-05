import styled from 'styled-components';
import { theme } from 'constants/theme';

export const BtnJsStyled = styled.button`
  background-color: ${props =>
    ({
      normal: theme.colors.dark,
      dark: theme.colors.accent,
      transparent: 'transparent',
    }[props.variant])};

  clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%);
  padding: 14px 6px;

  border: ${props =>
    ({
      normal: 'none',
      dark: 'none',
      transparent: '1px solid #8BAA36',
    }[props.variant])};
  color: ${props =>
    ({
      normal: theme.colors.white,
      dark: theme.colors.white,
      transparent: theme.colors.accentDark,
    }[props.variant])};
  transition: all 250ms linear;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${theme.fontWeights.normal};
  font-size: 10px;
  line-height: 15px;

  @media ${theme.device.tablet} {
    padding: 32px 12px;
    font-size: 14px;
    line-height: 21px;
  }

  @media ${theme.device.desktop} {
    padding: 50px 42px;
    font-size: 16px;
    line-height: 24px;
  }

  :hover,
  :focus {
    background-color: ${props =>
      ({
        normal: theme.colors.accent,
        dark: theme.colors.dark,
        transparent: theme.colors.accent,
      }[props.variant])};

    @media ${theme.device.mobile} {
      font-size: 14px;
      line-height: 21px;
    }

    @media ${theme.device.tablet} {
      font-size: 16px;
    }
  }
`;
