import editIcon from '../../../../images/icons/edit-icon.svg';
import logOutImg from '../../../../images/icons/arrow-right.svg'

import {
  UserModalSmallBackdrop,
  Container,
  UserModalSmall,
  EditProfileButton,
  EditText,
  EditIcon,
  LogOutButton,
  LogOutButtonText,
  LogOutButtonImg,
} from './SmallModalUser.styled'


export const SmallModalUser = ({
  openUser,
  handleOpenSmallUserMenu,
  handleOpenEditModal,
  stopPropagation,
  handleOpenLogoutMenu

}) => {



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
            <EditText>Edit profile</EditText>
            <EditIcon src={editIcon} alt='edit user icon' width={14} />
          </EditProfileButton >
          <LogOutButton onClick={handleOpenLogoutMenu}>
            <LogOutButtonText>Log out</LogOutButtonText>
            <LogOutButtonImg src={logOutImg} alt='logout image' width={18} />

          </LogOutButton>

        </UserModalSmall>
      </Container>
    </UserModalSmallBackdrop>


  );

}
