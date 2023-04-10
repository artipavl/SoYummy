import { useDispatch } from 'react-redux';
import crossIcon from '../../../../images/icons/cross.svg';
import {
  BackdropLogOutModal,
  LogOutModalWrap,
  Title,
  CloseButton,
  BottonsWrap,
  Button,
} from './LogOutModal.styled';
import { fetchUserLogout } from 'redux/authOperations';

export const LogOutModal = ({
  openLogoutMenu,
  stopPropagation,
  handleOpenLogoutMenu,
}) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(fetchUserLogout());
  };

  return (
    <BackdropLogOutModal
      className={openLogoutMenu ? 'open' : ''}
      onClick={handleOpenLogoutMenu}
    >
      <LogOutModalWrap
        className={openLogoutMenu ? 'open' : ''}
        onClick={stopPropagation}
      >
        <button type="button" onClick={handleOpenLogoutMenu}>
          <CloseButton src={crossIcon} alt="close button" width={20} />
        </button>
        <Title>Are you sure you want to log out?</Title>
        <BottonsWrap>
          <Button onClick={onLogout}>Log out</Button>
          <Button onClick={handleOpenLogoutMenu}>Cancel</Button>
        </BottonsWrap>
      </LogOutModalWrap>
    </BackdropLogOutModal>
  );
};