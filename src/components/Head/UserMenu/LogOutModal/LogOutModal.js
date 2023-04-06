import crossIcon from '../../../../images/icons/cross.svg';
import { BackdropLogOutModal, LogOutModalWrap, Title, CloseButton, BottonsWrap, Button  } from "./LogOutModal.styled"

export const LogOutModal = ({openLogoutMenu, stopPropagation, handleOpenLogoutMenu}) => {
  return (
    <BackdropLogOutModal
      className={openLogoutMenu ? 'open' : ''}
      onClick={handleOpenLogoutMenu}

    >
      <LogOutModalWrap
        className={openLogoutMenu ? "open" : ""}
        onClick={stopPropagation}>
        <button
          type='button'
          onClick={handleOpenLogoutMenu}>
          <CloseButton src={crossIcon} alt="close button" width={20} />
        </button>
        <Title>Are you sure you want to log out?</Title>
        <BottonsWrap>
          <Button>Log out</Button>
          <Button onClick={handleOpenLogoutMenu}>Cancel</Button>


    </BottonsWrap>
      </LogOutModalWrap >
    </BackdropLogOutModal>


  );
}
