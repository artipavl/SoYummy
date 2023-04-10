import styled from 'styled-components';

export const BackdropLogOutModal = styled.div`
  font-family: 'Poppins', sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 996;
  background-color: rgba(255, 255, 255, 0.01);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  z-index: 2000;

  &.open {
    opacity: 1;
    visibility: visible;
  }
`

export const LogOutModalWrap = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 44px 24px;
  background-color: ${props => props.theme.colors.textWhite};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 330px;
  height: auto;
  text-align: center;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &.open {
    opacity: 1;
    visibility: visible;
  }

  @media ${props => props.theme.device.tablet} {
    padding: 50px 40px;
    width: 480px;
  }

  @media ${props => props.theme.device.desktop} {
    padding: 50px;
    width: 500px;
  }
`

export const Title = styled.h2`
  font-size: 14px;
  color: ${props => props.theme.colors.text};

  @media ${props => props.theme.device.tablet} {
    font-size: 18px;
  }

`
export const CloseButton = styled.img`
 position: absolute;
 right: 18px;
 top: 18px;

`
export const BottonsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  @media ${props => props.theme.device.tablet} {
    margin-top: 32px;
  }


`
export const Button = styled.button`
  display: block;
  width: 137px;
  height: 49px;
  font-size: 14px;
  color: ${props => props.theme.colors.textWhite};
  background-color: ${props => props.theme.colors.accent} ;
  border-radius: 6px;
  transition: background-color 250ms linear;

  @media ${props => props.theme.device.tablet} {
    width: 192px;
    height: 59px;
    font-size: 16px;
  }
  /* @media ${props => props.theme.device.destop} {
    font-size: 18px;
  } */


  &:hover, &:focus {
    background-color: ${props => props.theme.colors.accentDark};
  }
  &:last-child {
    border: 1px solid ${props => props.theme.colors.whiteMuted};
    color: ${props => props.theme.colors.text};
    background-color:  ${props => props.theme.colors.whiteMuted};
    transition: all 250ms linear;

    &:hover, &:focus {
    background-color: transparent;
    border: 1px solid ${props => props.theme.colors.accentDark}
  }
  }
`




