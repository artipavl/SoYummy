import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  @media ${props => props.theme.device.mobile} {
    width: 375px;
    padding: 0 8px;
  }

  @media ${props => props.theme.device.tablet} {
    width: 768px;
    padding: 0 32px;
  }

  @media ${props => props.theme.device.desktop} {
    width: 1440px;
    padding: 0 100px;
  }
`;
