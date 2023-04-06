import styled from 'styled-components';

export const BackdropEditUserMOdal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.01);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &.open {
    opacity: 1;
    visibility: visible;
  }
`

export const ModalEditUser = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 32px 24px;
  background-color: ${props => props.theme.colors.textWhite};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 330px;
  height: auto;
  text-align: center;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  z-index: 1001;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &.open {
    opacity: 1;
    visibility: visible;
  }
`

export const CloseButton = styled.img`
 position: absolute;
 right: 18px;
 top: 18px

`
