import styled from 'styled-components';
import {ReactComponent as RedCross } from '../../../..//images/icons/Error-logo.svg'
import { FiUser } from 'react-icons/fi';
import { RiCloseLine } from 'react-icons/ri';

export const UserIconStyled = styled(FiUser)`
  position: absolute;
  top: 50%;
  left: 13px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  @media ${props => props.theme.device.tablet} {
    width: 24px;
    height: 24px;
  }

`

export const RedCrossStyled = styled(RedCross)`
  transition: transform 0.5s ease;
  &:hover {
    transform: rotate(360deg);
  }

`

export const ResetNameButton = styled.button`
  height: 20px;
  position: absolute;
  top: 50%;
  right: 13px;
  transform: translateY(-50%);


`

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
  background-color: ${props => props.theme.colors.editProfileModal};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
  text-align: center;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;
  z-index: 1001;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
    @media ${props => props.theme.device.mobile} {
      width: 330px;
    }
    @media ${props => props.theme.device.tablet} {
      width: 480px;
      padding: 50px 40px
    }
    @media ${props => props.theme.device.desktop} {
      width: 500px;
      padding: 60px 50px
    }


  &.open {
    opacity: 1;
    visibility: visible;
  }
`

// export const CloseButton = styled.img`
//  position: absolute;
//  right: 18px;
//  top: 18px;
// `

export const CloseIcon = styled(RiCloseLine)`
  color: ${props => props.theme.colors.profileModalCloseIcon};
  color: ${props => props.theme.colors.profileModalCloseIcon};
  font-size: 20px;
  position: absolute;
  right: 18px;
  top: 18px;
`;

export const PreviewWrap = styled.div`
  position: relative;
`
export const PreviewImageWrap = styled.label`

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.whiteMuted};
  overflow: hidden;
  @media ${props => props.theme.device.tablet} {
    width: 103px;
    height: 103px;
  }

`
export const PreviewImage = styled.img`
    max-width: 160px;

`

export const AddImageButton = styled.label`
  position: absolute;
  display: inline-block;
  right: 95px;
  top: 66px;
  @media ${props => props.theme.device.tablet} {

  top: 70px;
  right: 150px;
  }

`

export const ValidImageText = styled.p`
  color: ${({ children }) => {
  if (children === 'Valid Name' || children === 'Valid image') {
      return '#8BAA36'
  }
  return "#fa2c2c";
}};
`

export const EditNameFormWrap = styled.div`
  margin-top: 35px;
  position: relative;
`

export const EditNameFormStyled = styled.input`
  position: relative;
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  padding: 0;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
  height: 48px;
  background-color: transparent;
  color: ${({error}) => {

  if (error) {
    return "#fa2c2c"
  }
  return '#8BAA36';
}};

  font-size: inherit;
  border-radius: 6px;
  border: 1px solid ;
  border-color: ${({error}) => {

  if (error) {
    return "#fa2c2c"
  }
  return '#8BAA36';
}};

  @media ${props => props.theme.device.tablet} {
    height: 58px;
    font-size: 18px;
}

`


export const EditBtnWrap = styled.div`
  margin-top: 5px;

`
export const  EditModalBtn = styled.button`
  display: block;
  width: 100%;
  height: 49px;
  font-size: 14px;
  color: ${props => props.theme.colors.textWhite};
  background-color: ${props => props.theme.colors.accentCurrent} ;
  border-radius: 6px;
  transition: color 250ms linear;

  &:hover, &:focus {
    color: ${props => props.theme.colors.dark}
  }

  @media ${props => props.theme.device.tablet} {
    height: 59px;
    font-size: 16px;

  }

`




