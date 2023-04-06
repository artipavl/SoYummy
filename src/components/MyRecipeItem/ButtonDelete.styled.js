import styled from "styled-components";

export const BtnDel = styled.button`
  background-color: ${props =>
    ({
      black: props.theme.colors.accentMuted,
      white: props.theme.colors.accent,
    }[props.battonDel])};

  color: ${props =>
    ({
      black: props.theme.colors.accentDark,
      white: props.theme.colors.white,
    }[props.battonDel])};

  width: 24px;
  height: 24px;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;

  @media ${props => props.theme.device.tablet} {
    font-size: 22px;
    width: 38px;
    height: 38px;
  }

  @media ${props => props.theme.device.desktop} {
    font-size: 24px;
    width: 44px;
    height: 44px;
  }

  :hover,
  :focus {
    background-color: ${props =>
      ({
        black: props.theme.colors.accent,
        white: props.theme.colors.accentDark,
      }[props.battonDel])};

    color: ${props =>
      ({
        black: props.theme.colors.textWhite,
        white: props.theme.colors.whiteMuted,
      }[props.battonDel])};
  }
`;