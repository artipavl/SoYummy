import styled from 'styled-components';
import userIconBG from '../../../../../images/icons/user-icon.svg'
import { ReactComponent as UploadIcon } from '../../../../../images/icons/plus-icon.svg';

export const UploadContainer = styled.div`
  position: relative;
`;

export const UploadIconWrapper = styled.label`
  position: relative;
  margin: 0 auto;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.whiteMuted};
  background-image: url('${userIconBG}');
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

`;

export const HiddenInput = styled.input.attrs({
  type: 'file',
  accept: 'image/*',
  id: 'imageUpload',
  name: 'imageUpload',
})`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  opacity: 0;
`;

export const UploadedImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 50%;
  overflow: hidden;
`;

export const DeleteButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #ff3b30;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  svg {
    width: 16px;
    height: 16px;
    fill: #fff;
  }
`;

export const LoadIcon = styled(UploadIcon)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 24px;
  height: 24px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;

`


