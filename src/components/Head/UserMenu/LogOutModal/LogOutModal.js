import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import notiflix from 'notiflix';

import {
  BackdropLogOutModal,
  LogOutModalWrap,
  Title,
  BottonsWrap,
  Button,
} from './LogOutModal.styled';
import { fetchUserLogout } from 'redux/authOperations';

import { CloseButtonStyled } from '../EditModalUser/EditModalUser.styled';

export const LogOutModal = ({
  openLogoutMenu,
  stopPropagation,
  handleOpenLogoutMenu,
}) => {
  const dispatch = useDispatch();

  const onLogout = () => {
    notiflix.Notify.success('Goodbye');
    setTimeout(() => {
      dispatch(fetchUserLogout());
    }, 1000);
  };

  useEffect(() => {
    if (openLogoutMenu) {
      const handleKeyDown = e => {
        if (e.code === 'Escape') {
          handleOpenLogoutMenu();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [handleOpenLogoutMenu, openLogoutMenu]);

  useEffect(() => {
    if (openLogoutMenu) {
      const scrollY = window.scrollY;

      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [openLogoutMenu]);

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
          <CloseButtonStyled />
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
