import styled from 'styled-components';

export const Overlay= styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
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

export const ModalText = styled.p`
 fontSize: 32px;
`;

export const ModalImage = styled.img`
  width: 100%;
`;

export const ButtonClose = styled.button`
 width:48px;
 height:48px;
 borderRadius: 50%;
 backgroundColor: #8BAA36;
`;