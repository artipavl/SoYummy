import { theme } from "constants/theme";
import styled from "styled-components";



export const ConteinerFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ConteinerGrid = styled.div`
  @media ${theme.device.tablet} {
    display: flex;
    flex-direction: column;
  }

  @media ${theme.device.tablet} {
    max-width: 768px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  @media ${theme.device.desktop} {
    max-width: 1440px;
  }
`;