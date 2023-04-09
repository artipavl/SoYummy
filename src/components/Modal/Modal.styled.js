import styled from 'styled-components';

import coctail_mob from '../../../images/Modal/coctail_mob.webp';
import coctail_tablet from '../../../images/Modal/coctail_tablet.webp';
import coctail_desktop from '../../../images/Modal/coctail_desktop.webp';

export const Overlay= styled.div`
  position: fixed;
  top: 0;
  right:0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalContainer= styled.div`
  max-width: 100%;
  max-height: 100%;
  background: url('${coctail_mob}');

  @media ${props => props.theme.device.tablet} {
  width: 400px;
  height: 400px;
  background: url('${coctail_tablet}');
  border-radius:30px;
  }

  @media ${props => props.theme.device.desktop} {
  width: 500px;
  height: 500px;
  background: url('${coctail_desktop}');
  border-radius:30px;
  }
`;

export const TextContainer = styled.div`
 width:299px;
 height: 269px;
 padding:44px 26px 89px 26px;
 filter:blur();

@media ${props => props.theme.device.tablet} {
 width:268px;
 height: 242px;
 padding:32px 24px 90px 24px;
 filter:blur();
  }

@media ${props => props.theme.device.desktop} {
 width:268px;
 height: 242px;
 padding:32px 24px 90px 24px;
  filter:blur();
  }

`;


export const ModalText = styled.p`
 font-Size: 32px;
 font-family: 'Poppins';

@media ${props => props.theme.device.tablet} {
 font-Size: 28px;
  }

@media ${props => props.theme.device.desktop} {
 font-Size: 28px;
  }

`;

export const ModalImage = styled.img`
  width: 100%;
`;

export const ButtonClose = styled.button`
  width:48px;
  height:48px;
  border-Radius: 50%;
  background-Color: #8BAA36;
  align-items: center;
  justify-content: center;
  padding: 0px;
  position: absolute;
  top: 10px;
  right: 140px;
  cursor: pointer;
`;

export const BtnIcon = styled.img`
  width:48px;
  height:48px;
  fill:#FAFAFA;
  
`;

