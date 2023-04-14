import { useEffect} from 'react';
// import { createPortal } from 'react-dom';
import close from '../../../src/images/Modal/close.svg';
import text_bg from '../../../src/images/Modal/text_bg.svg';
import { Overlay,ModalContainer,ModalText,WowText, ButtonClose,BtnIcon,TextContainer,Wrapper,TextSvg } from "./Modal.styled";


// const modalRoot = document.querySelector('#modal-root');

export default function Modal({  onClose, text  }) {
  
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
  
  

  
  
    return (
      <Overlay onClick={handleBackdropClick}>
        <ModalContainer>
          
          <TextContainer>
            <TextSvg src={text_bg} alt='text-background' />
            <Wrapper>
            <ModalText><WowText>Wow!</WowText>{text}</ModalText>
            </Wrapper>
             <ButtonClose type='button' onClick={buttonCloseClick}>
                   <BtnIcon src={close} alt='cross'/>
                </ButtonClose>
          </TextContainer>
               
        </ModalContainer>
      </Overlay>
     
  );
  

}
  
