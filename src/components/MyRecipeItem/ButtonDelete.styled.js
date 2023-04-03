import styled from "styled-components";
import { theme } from "constants/theme";


export const BtnDel = styled.button`
  background-color: ${props =>
    ({
      black: theme.colors.accentMuted,
      white: theme.colors.accent,
    }[props.battonDel])};

  color: ${props =>
    ({
      black: theme.colors.accentDark,
      white: theme.colors.white,
    }[props.battonDel])};

  width: 24px;
  height: 24px;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;

  @media ${theme.device.tablet} {
    font-size: 22px;
    width: 38px;
    height: 38px;
  }

  @media ${theme.device.desktop} {
    font-size: 24px;
    width: 44px;
    height: 44px;
  }

  :hover,
  :focus {
    background-color: ${props =>
      ({
        black: theme.colors.accent,
        white: theme.colors.accentDark,
      }[props.battonDel])};

    color: ${props =>
      ({
        black: theme.colors.textWhite,
        white: theme.colors.whiteMuted,
      }[props.battonDel])};
  }
`;