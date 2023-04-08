import styled from 'styled-components';

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
`;

export const TextContainer = styled.div`
 width:299px;
 height: 269px;
 padding:44px 26px 89px 26px;
 filter:blur();
`;


export const ModalText = styled.p`
 font-Size: 32px;
 font-family: 'Poppins';
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
  background-Color: #FAFAFA;
  fill:#FAFAFA;
  
`;

