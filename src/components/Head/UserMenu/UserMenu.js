import { useState } from 'react';
import SmallModalUser from './SmallModalUser';
import EditUserModal from './EditModalUser';
import LogOutModal from './LogOutModal';

export const UserMenu = ({
  openUser,
  handleOpenSmallUserMenu,
  image,
  name,
  handleImageUpload,
  handleImageRemove,
  handleChangeName,

}) => {
  const [openEditMenu, setOpenEditMenu] = useState(false);
  const [openLogoutMenu, setOpenLogoutMenu] = useState(false);

  const handleOpenEditModal = () => {
    setOpenEditMenu(!openEditMenu);
    if (openUser) {
      handleOpenSmallUserMenu();
    }
  }

  const handleOpenLogoutMenu = () => {
    setOpenLogoutMenu(!openLogoutMenu);
    if (openUser) {
      handleOpenSmallUserMenu();
    }
  }

  const stopPropagation = (event) => {
    event.stopPropagation();

  };

  return (
    <>
      <SmallModalUser
        openUser={openUser}
        handleOpenSmallUserMenu={handleOpenSmallUserMenu}
        handleOpenEditModal={handleOpenEditModal}
        stopPropagation={stopPropagation}
        handleOpenLogoutMenu={handleOpenLogoutMenu}

      />
      <EditUserModal
        openEditMenu={openEditMenu}
        handleOpenEditModal={handleOpenEditModal}
        stopPropagation={stopPropagation}
        image={image}
        name={name}
        handleImageUpload={handleImageUpload}
        handleImageRemove={handleImageRemove}
        handleChangeName={handleChangeName}

      />
      <LogOutModal
        openLogoutMenu={openLogoutMenu}
        stopPropagation={stopPropagation}
        handleOpenLogoutMenu={handleOpenLogoutMenu}


      />


    </>
  );
};

