import styled from 'styled-components';

import coctail_mob from '../../../src/images/Modal/coctail_mob.webp';
import coctail_tablet from '../../../src/images/Modal/coctail_tablet.webp';
import coctail_desktop from '../../../src/images/Modal/coctail_desktop.webp';
import coctail_mob2x from '../../../src/images/Modal/coctail_mob2x.webp';
import coctail_tablet2x from '../../../src/images/Modal/coctail_tablet2x.webp';
import coctail_desktop2x from '../../../src/images/Modal/coctail_desktop2x.webp';

import kebabs_mob from '../../../src/images/Modal/kebabs_mob.webp';
import kebabs_tablet from '../../../src/images/Modal/kebabs_tablet.webp';
import kebabs_desktop from '../../../src/images/Modal/kebabs_desktop.webp';
import kebabs_mob2x from '../../../src/images/Modal/kebabs_mob2x.webp';
import kebabs_tablet2x from '../../../src/images/Modal/kebabs_tablet2x.webp';
import kebabs_desktop2x from '../../../src/images/Modal/kebabs_desktop2x.webp';

import pancakes_mob from '../../../src/images/Modal/pancakes_mob.webp';
import pancakes_tablet from '../../../src/images/Modal/pancakes_tablet.webp';
import pancakes_desktop from '../../../src/images/Modal/pancakes_desktop.webp';
import pancakes_mob2x from '../../../src/images/Modal/pancakes_mob2x.webp';
import pancakes_tablet2x from '../../../src/images/Modal/pancakes_tablet2x.webp';
import pancakes_desktop2x from '../../../src/images/Modal/pancakes_desktop2x.webp';

import toasts_mob from '../../../src/images/Modal/toasts_mob.webp';
import toasts_tablet from '../../../src/images/Modal/toasts_tablet.webp';
import toasts_desktop from '../../../src/images/Modal/toasts_desktop.webp';
import toasts_mob2x from '../../../src/images/Modal/toasts_mob2x.webp';
import toasts_tablet2x from '../../../src/images/Modal/toasts_tablet2x.webp';
import toasts_desktop2x from '../../../src/images/Modal/toasts_desktop2x.webp';

const mobImages = [coctail_mob, kebabs_mob, pancakes_mob, toasts_mob];
const mob2xImages = [coctail_mob2x, kebabs_mob2x, pancakes_mob2x, toasts_mob2x];

const tabletImages = [coctail_tablet, kebabs_tablet, pancakes_tablet, toasts_tablet];
const tablet2xImages = [coctail_tablet2x, kebabs_tablet2x, pancakes_tablet2x, toasts_tablet2x];

const desktopImages = [coctail_desktop, kebabs_desktop, pancakes_desktop, toasts_desktop];
const desktop2xImages = [coctail_desktop2x, kebabs_desktop2x, pancakes_desktop2x, toasts_desktop2x];

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
  background-image:url(${props => mobImages[Math.floor(Math.random() * mobImages.length)]});
  background-repeat:no-repeat;
  background-size:cover;
  /* background: url('${coctail_mob}'); */
  @media ${props => props.theme.retinaBackgroundImage} {
   background-image:url(${props => mob2xImages[Math.floor(Math.random() * mob2xImages.length)]});
  }

  @media ${props => props.theme.device.tablet} {
  width: 400px;
  height: 400px;
  background-image:url(${props => tabletImages[Math.floor(Math.random() * tabletImages.length)]});
  border-radius:30px;
  
  @media ${props => props.theme.retinaBackgroundImage} {
   background-image:url(${props => tablet2xImages[Math.floor(Math.random() * tablet2xImages.length)]});
  }
  }

  @media ${props => props.theme.device.desktop} {
  width: 500px;
  height: 500px;
  background-image:url(${props => desktopImages[Math.floor(Math.random() * desktopImages.length)]});
  border-radius:30px;
  
  @media ${props => props.theme.retinaBackgroundImage} {
   background-image:url(${props => desktop2xImages[Math.floor(Math.random() * desktop2xImages.length)]});
  }
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
 color: ${props => props.theme.colors.textWhite};

@media ${props => props.theme.device.tablet} {
 font-Size: 28px;
  }

@media ${props => props.theme.device.desktop} {
 font-Size: 28px;
  }

`;

export const WowText = styled.span`
 font-Size: 32px;
 font-family: 'Poppins';
 color: ${props => props.theme.colors.accent};

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

