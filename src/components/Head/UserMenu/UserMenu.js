import { useState } from 'react';
import SmallModalUser from './SmallModalUser';
import EditUserModal from './EditModalUser';

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
  // const [logoutMenu, setLogoutMenu] = useState(false);

  const handleOpenEditModal = () => {
    setOpenEditMenu(!openEditMenu);
    if (openUser) {
      handleOpenSmallUserMenu();
    }
  }

  // const handleOpenLogoutMenu = () => {
  //   setLogoutMenu(!logoutMenu);
  // }

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

    </>
  );
};

