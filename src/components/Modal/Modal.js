import { useEffect} from 'react';
import { } from "./Modal.styled";
import { createPortal } from 'react-dom';

import { Overlay,ModalContainer,ModalImage } from "./Modal.styled";


const modalRoot = document.querySelector('#modal-root');

export default function Modal ({src, onClose}) {
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

  
    return createPortal(
      <Overlay onClick={handleBackdropClick}>
        <ModalContainer>
                <ModalImage src={src} alt="image" />
                <button type='button'>X</button>
        </ModalContainer>
      </Overlay>,
      modalRoot
    );
}
  
