import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 260px;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  width: 320px;
  height: 296px;
  background-image: url('images/MainPage/HeroMain/plate.png');
  background-size: contain;

  @media ${props => props.theme.device.tablet} {
    width: 378px;
    height: 351px;
    top: 95px;
    left: 100%;
    transform: translateX(-100%);
  }
  @media ${props => props.theme.device.desktop} {
    width: 578px;
    height: 539px;
    top: 62px;
    left: 87%;
    transform: translateX(-100%);
  }
`;
