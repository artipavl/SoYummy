import styled from 'styled-components';

export const RecipesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }

  @media ${props => props.theme.device.desktop} {
    gap: 14px;

    padding-left: 100px;
    padding-right: 100px;
  }
`;
