import styled from "styled-components";
import leafsLeft from 'images/MainPage/HeroMain/leafs-left.png';
import leafsLeftTab from 'images/MainPage/HeroMain/leafs-left-tab.png';
import leafsLeftDesc from 'images/MainPage/HeroMain/leafs-left-desc.png';

export const Container = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  z-index: -2;
  width: 48px;
  height: 202px;
  background-image: url(${leafsLeft});
  background-size: cover;

  @media ${props => props.theme.device.tablet} {
    top: 0;
    width: 67px;
    height: 323px;
    background-image: url(${leafsLeftTab});
  }
  @media ${props => props.theme.device.desktop} {
    width: 116px;
    height: 398px;
    background-image: url(${leafsLeftDesc});
  }
`;