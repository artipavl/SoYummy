import { useEffect} from 'react';
import { createPortal } from 'react-dom';
import cross from '../../images/icons/logo-Lite-Icon.svg';

import { Overlay,ModalContainer,ModalText,WowText, ButtonClose,BtnIcon,ModalImage,TextContainer } from "./Modal.styled";


const modalRoot = document.querySelector('#modal-root');

export default function Modal ({ title, onClose}) {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
  
    document.addEventListener('keydown', handleKeyDown);
    return () => { document.removeEventListener('keydown', handleKeyDown); }
  }, [onClose]);
 

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
    };
    
  const buttonCloseClick= e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
    };

  
    return createPortal(
      <Overlay onClick={handleBackdropClick}>
        <ModalContainer>
                <TextContainer>
                <ModalText><WowText>Wow!</WowText>{title }</ModalText>
                </TextContainer>
                <ButtonClose type='button' onClick={buttonCloseClick}>
                    <BtnIcon src={cross} alt='cross'/>
                </ButtonClose>
        </ModalContainer>
      </Overlay>,
      modalRoot
  );
  

}
  
