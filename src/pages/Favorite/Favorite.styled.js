import styled from 'styled-components';

export const Page = styled.section`
  width: 100%;
  padding-top: 62px;
  padding-bottom: 100px;
  margin: 0 auto;

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
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 1240px;
    padding-left: 0px;
    padding-right: 0px;
  }
`;
