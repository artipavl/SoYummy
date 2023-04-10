import { useDispatch, useSelector } from 'react-redux';

// import { useEffect } from 'react';

// import notiflix from "notiflix";

import { useFormik } from 'formik';
import { editUserValidationSchema } from 'utils/editUserValidationSchema';

import { selectUserName, selectAvatarURL } from 'redux/selectors';
import { updateUser } from '../../../../redux/authOperations';

import addAvatarImg from '../../../../images/icons/plus-icon.svg';
import crossIcon from '../../../../images/icons/cross.svg';

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


  const formik = useFormik({
  initialValues: {
      avatar: avatarURL || '',
      name: userName || ''
    },
    validationSchema: editUserValidationSchema,
    onSubmit: ({avatar, name}) => {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('avatar', avatar)
      dispatch(updateUser(formData))
        .then((res, rej) => {
          console.log(res, rej)
        })

      handleOpenEditModal()
    }
  })


  const handleAvatarChange = (e) => {
    const newAvatar = e.target.files[0];
    formik.setValues({ ...formik.values, avatar: newAvatar });
  };

  const handleResetName = () => {
    formik.resetForm({
      values: {
        ...formik.values,
        name: ''
      }
    });
  };

  const handleResetImage = () => {
    formik.resetForm({
      values: {
        ...formik.values,
        avatar: null
      }
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

        <button
          type='button'
          onClick={handleResetName}
        >ResetName</button>

        <button
          type='button'
          onClick={handleResetImage}
        >ResetImage</button>

        <form onSubmit={formik.handleSubmit}>
          <PreviewWrap>
            <PreviewImageWrap htmlFor="file-upload">

              <PreviewImage
                src={formik.values.avatar instanceof File ? URL.createObjectURL(formik.values.avatar) : avatarURL}

                alt="User avatar"
                style={{ display: 'block', margin: '0 auto' }}
              />
            </PreviewImageWrap>
            {formik.errors.avatar ? (
              <div>{formik.errors.avatar}</div>
            ) : <div>Valid image</div>}


            <AddImageButton htmlFor="file-upload">
              <img src={addAvatarImg} alt="Upload icon" />
              <input
                style={{ display: 'none' }}
                id="file-upload"
                type="file"
                name='avatar'
                onChange={handleAvatarChange}
                onBlur={formik.handleBlur}
                error={formik.errors.avatar}
                touched={formik.touched.avatar}
                required
              />
            </AddImageButton>
          </PreviewWrap>

          <EditNameFormWrap>
            <EditNameFormStyled
              type="text"
              id="name"
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.name}
              error={formik.errors.name}
              touched={formik.touched.name}
            />

          </EditNameFormWrap>
          {formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : <div>Valid Name</div>}

          <EditBtnWrap>
            <EditModalBtn
              type='submit' disabled={!formik.isValid}>Save Changes</EditModalBtn>
          </EditBtnWrap>
        </form>
      </ModalEditUser>
    </BackdropEditUserMOdal>
  );
};

