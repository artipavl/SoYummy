import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media ${props => props.theme.device.mobile} {
    width: 375px;
    padding-left: 16px;
    padding-right: 16px;
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
