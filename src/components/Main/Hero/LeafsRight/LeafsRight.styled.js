import styled from 'styled-components';
import leafsRight from 'images/MainPage/HeroMain/leafs-right.png'
import leafsRightTab from 'images/MainPage/HeroMain/leafs-right-tab.png';
import leafsRightDesc from 'images/MainPage/HeroMain/leafs-right-desc.png';


export const Container = styled.div`
position: absolute;
  top: 50px;
  right: 0;
  z-index: -2;
  width: 375px;
  height: 824px;
  background-image: url(${leafsRight});
  background-size: cover;

  @media ${props => props.theme.device.tablet} {
    top: 0;
    width: 596px;
    height: 789px;
    background-image: url(${leafsRightTab});
  }
  @media ${props => props.theme.device.desktop} {
    width: 918px;
    height: 833px;
    background-image: url(${leafsRightDesc});
  }
`;
