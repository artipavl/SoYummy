import { useEffect } from 'react';
import { ReactComponent as ArrowRight } from '../../../../images/icons/arrow-right.svg'


import {
  EditIconStyled,
  UserModalSmallBackdrop,
  Container,
  UserModalSmall,
  EditProfileButton,
  EditText,
  LogOutButton,
  LogOutButtonText,
} from './SmallModalUser.styled'


export const SmallModalUser = ({
  openUser,
  handleOpenSmallUserMenu,
  handleOpenEditModal,
  stopPropagation,
  handleOpenLogoutMenu

}) => {

 useEffect(() => {
    if (openUser) {
      const handleKeyDown = e => {

        if (e.code === 'Escape') {
          handleOpenSmallUserMenu();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => { document.removeEventListener('keydown', handleKeyDown); }
    }
  }, [handleOpenSmallUserMenu, openUser]);


  return (
    <UserModalSmallBackdrop
      onClick={handleOpenSmallUserMenu}
      className={openUser ? "open" : ""}

    >
      <Container>
        <UserModalSmall
          className={openUser ? "open" : ""}
          onClick={stopPropagation}>

          <EditProfileButton onClick={handleOpenEditModal}>
            <EditText className='hoverText'>Edit profile</EditText>
           <EditIconStyled className='hoverIcon'/>
          </EditProfileButton >
          <LogOutButton onClick={handleOpenLogoutMenu}>
            <LogOutButtonText>Log out</LogOutButtonText>
            <ArrowRight style={{marginLeft: 4}}/>

          </LogOutButton>

        </UserModalSmall>
      </Container>
    </UserModalSmallBackdrop>


  );

}
