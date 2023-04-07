import UploadFoto from './UploadPhoto';
import EditNameForm from './EditNameForm';
import EditModalButton from './EditModalButton';

import crossIcon from '../../../../images/icons/cross.svg'

import { BackdropEditUserMOdal, ModalEditUser, CloseButton } from "./EditModalUser.styled";

export const EditUserModal = ({
  openEditMenu,
  handleOpenEditModal,
  stopPropagation,
  image,
  name,
  handleImageUpload,
  handleImageRemove,
  handleChangeName

}) => {


  const onSubmitForm = (event) => {
    event.preventDefault();
    handleOpenEditModal();
  }

  return (
    <BackdropEditUserMOdal
      className={openEditMenu ? "open" : ""}
      onClick={handleOpenEditModal}

    >
      <ModalEditUser
        className={openEditMenu ? "open" : ""}
        onClick={stopPropagation}
      >
        <button
          type='button'
          onClick={handleOpenEditModal}>
          <CloseButton src={crossIcon} alt="close button" width={20} />
        </button>

        <form onSubmit={onSubmitForm}>

          <UploadFoto
            image={image}
            handleImageUpload={handleImageUpload}
            handleImageRemove={handleImageRemove}

          />
          <EditNameForm
            name={name}
            handleChangeName={handleChangeName}
          />
          <EditModalButton />

        </form>

      </ModalEditUser >


    </BackdropEditUserMOdal>

  );
}
