import styled from 'styled-components';

export const SearchPageSection = styled.section`
  padding-left: 16px;
  padding-right: 16px;

  @media ${props => props.theme.device.tablet} {
    padding-left: 32px;
    padding-right: 32px;
  }

  @media ${props => props.theme.device.desktop} {
    padding-left: 100px;
    padding-right: 100px;
  }
`;
