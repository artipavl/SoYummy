import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 62px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 100px;
  width: 343px;
  margin: 0 auto;
  background: ${props => props.theme.colors.modes.white.background};

  @media ${props => props.theme.device.tablet} {
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 203px;
    width: 704px;
  }

  @media ${props => props.theme.device.desktop} {
    padding-left: 100px;
    padding-right: 100px;
    width: 1240px;
  }
`;

export const Content = styled.div`
  margin-top: 50px;
  text-align: center;
`;
export const Page = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.colors.modes.white.background};
`;
