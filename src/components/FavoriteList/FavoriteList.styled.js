import styled from 'styled-components';

export const List = styled.div`
  position: relative;
  padding-top: 50px;
  padding-bottom: 40px;

  @media ${props => props.theme.device.tablet} {
    padding-top: 100px;
    padding-bottom: 50px;
  }
  @media ${props => props.theme.device.desktop} {
    padding-top: 100px;
    padding-bottom: 50px;
  }
`;
export const ListText = styled.h3`
  font-size: 20px;

  @media ${props => props.theme.device.tablet} {
    font-size: 24px;
  }
`

export const LoaderBox = styled.div`
  position: absolute;
  margin:20 auto;
  width: 36px;
  height: 36px;
  left: 150px;
  top: -65px;

  @media ${props => props.theme.device.tablet} {
    width: 50px;
    height: 50px;
    left: 200px;
    top: -70px;
  }

  @media ${props => props.theme.device.desktop} {
    width: 80px;
    height: 80px;
    left: 280px;
    top: -75px;
  }
`;