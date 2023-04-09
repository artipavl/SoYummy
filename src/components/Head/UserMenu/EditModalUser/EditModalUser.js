import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import notiflix from "notiflix";

import { selectUserName, selectAvatarURL } from 'redux/selectors';
import { updateUser } from '../../../../redux/authOperations';

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import addAvatarImg from '../../../../images/icons/plus-icon.svg';
import crossIcon from '../../../../images/icons/cross.svg'

import {
  BackdropEditUserMOdal,
  ModalEditUser,
  CloseButton,
  PreviewWrap,
  PreviewImageWrap,
  PreviewImage,
  AddImageButton,
  EditNameFormWrap,
  EditNameFormStyled,
  EditBtnWrap,
  EditModalBtn,
} from "./EditModalUser.styled";

export const EditUserModal = ({ openEditMenu, handleOpenEditModal, stopPropagation, }) => {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const avatarURL = useSelector(selectAvatarURL);

  const [name, setName] = useState(userName);
  const [avatar, setAvatar] = useState(avatarURL);

  const handleAvatarChange = (e) => {
    const newAvatar = e.target.files[0];
    setAvatar(newAvatar);
  };

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (avatar && !avatar.name.match(/\.(jpg|jpeg|png)$/)) {
      notiflix.Notify.failure("Only JPG, JPEG, and PNG files are allowed.");
      setAvatar(avatarURL)
    return;
  }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('avatar', avatar);
    dispatch(updateUser(formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  })).then(() => {
    notiflix.Notify.success('User updated successfully!');
    handleOpenEditModal();
  }).catch((error) => {
    console.log(error);
  });
  };

  return (
    <BackdropEditUserMOdal
      className={openEditMenu ? "open" : ""}
      onClick={handleOpenEditModal}>
      <ModalEditUser
        className={openEditMenu ? "open" : ""}
        onClick={stopPropagation}>

        <button
          type='button'
          onClick={handleOpenEditModal}>
          <CloseButton src={crossIcon} alt="close button" width={20} />
        </button>

        <form onSubmit={handleSubmit}>
          <PreviewWrap>
            <PreviewImageWrap htmlFor="file-upload">

              <PreviewImage
                src={avatar instanceof File ? URL.createObjectURL(avatar) : avatarURL}
                alt="User avatar"
                style={{ display: 'block', margin: '0 auto' }}
              />
            </PreviewImageWrap>


            <AddImageButton htmlFor="file-upload">
              <img src={addAvatarImg} alt="Upload icon" />
              <input id="file-upload" type="file" onChange={handleAvatarChange} style={{ display: 'none' }} />
            </AddImageButton>


          </PreviewWrap>


          <EditNameFormWrap>
            <EditNameFormStyled type="text" onChange={handleNameChange} value={name} />
          </EditNameFormWrap>
          <EditBtnWrap>
            <EditModalBtn type='submit'>Save Changes</EditModalBtn>
          </EditBtnWrap>
        </form>
      </ModalEditUser>
    </BackdropEditUserMOdal>
  );
};
