import styled from "styled-components";



export const ConteinerFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ConteinerGrid = styled.div`
  @media ${props => props.theme.device.tablet} {
    display: flex;
    flex-direction: column;
  }

  @media ${props => props.theme.device.tablet} {
    max-width: 768px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  @media ${props => props.theme.device.desktop} {
    max-width: 1440px;
  }
`;