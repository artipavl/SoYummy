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
  width: 300px;
  height: 300px;
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12)  ;
  position:relative;    
  

  background-image:url(${props => mobImages[Math.floor(Math.random() * mobImages.length)]});
  background-repeat:no-repeat;
  background-size:cover;

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
 width:200px;
 height: 180px;
 /* padding:18px 18px 66px 18px; */
 margin:102px 50px 18px 50px;
 position:absolute;
 /* bottom:40px; */
 position:relative;


 

@media ${props => props.theme.device.tablet} {
 width:268px;
 height: 242px;
 /* padding:32px 24px 90px 24px; */
 margin:134px 66px 24px 66px;
  }

@media ${props => props.theme.device.desktop} {
 width:268px;
 height: 242px;
 /* padding:32px 24px 90px 24px; */
 margin:218px 116px 40px 116px;
  }

`;

export const Wrapper = styled.div`
 min-width:172px;
 min-height: 72px;
 margin: 0 auto;
 padding:22px 18px 62px 18px;
 position:absolute;
 top:22px;
 left:50%;
 transform: translate(-50%, -50%);

@media ${props => props.theme.device.tablet} {
 width:220px;
 height: 120px;
 padding:32px 26px 90px 26px;
 top:32px;
  }

@media ${props => props.theme.device.desktop} {
 width:220px;
 height: 120px;
 padding:32px 26px 90px 26px;
  top:32px;
  }


 `;


export const ModalText = styled.p`
 font-size:20px;
 font-weight:600;
 line-height:1.2;
 text-align:center;
 color: ${props => props.theme.colors.textWhite};

@media ${props => props.theme.device.tablet} {
 font-size: 28px;
  }

@media ${props => props.theme.device.desktop} {
 font-size: 28px;
  }

`;

export const WowText = styled.span`
 font-size: 20px;
 line-height:1.2;
 font-weight:600;
 color: ${props => props.theme.colors.accent};

@media ${props => props.theme.device.tablet} {
 font-size: 28px;
  }

@media ${props => props.theme.device.desktop} {
 font-size: 28px;
  }
`;

export const TextSvg = styled.img`
 width:200px;
 height: 180px;
 filter: grayscale(100%);
 margin:0 auto;
 
 @media ${props => props.theme.device.tablet} {
width:268px;
 height: 242px;
  }

@media ${props => props.theme.device.desktop} {
width:268px;
 height: 242px;
  }




`;


export const ButtonClose = styled.button`
  width:40px;
  height:40px;
  border-Radius: 50%;
  background-Color: #8BAA36;
  position:relative;
  position:absolute;
  padding: 0px;
  
  top:85%;
  left:50%;
  transform:translate(-50%,-50%);
  cursor: pointer;

  @media ${props => props.theme.device.tablet} {
  width:48px;
  height:48px;
    top:85%;
  }

 @media ${props => props.theme.device.desktop} {
   width:48px;
  height:48px;
  top:85%;
  }

`;



export const BtnIcon = styled.img`
  width:12px;
  height:12px;
  fill:#FAFAFA;
  position:absolute;
  top:50%;
  left:50%;
  transform:translate(-50%,-50%);
  
`;

