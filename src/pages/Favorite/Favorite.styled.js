import styled from 'styled-components';

export const Page = styled.section`
  padding-top: 62px;
  padding-left: 16px;
  padding-right: 16px;
  width: 343px;
  margin: 0 auto;
  background: #ececec;

  @media ${props => props.theme.device.tablet} {
    padding-left: 32px;
    padding-right: 32px;
    width: 704px;
  }

  @media ${props => props.theme.device.desktop} {
    padding-left: 100px;
    padding-right: 100px;
    min-width: 1240px;
  }
`;