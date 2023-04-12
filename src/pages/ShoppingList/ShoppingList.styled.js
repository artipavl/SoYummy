import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 62px;
  width: 100%;
  margin: 0 auto;

  @media ${props => props.theme.device.mobile} {
    width: 375px;
    padding-left: 8px;
    padding-right: 8px;
  }

  @media ${props => props.theme.device.tablet} {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;
  }

  @media ${props => props.theme.device.desktop} {
    width: 1440px;
    padding-left: 100px;
    padding-right: 100px;
  }
`;
