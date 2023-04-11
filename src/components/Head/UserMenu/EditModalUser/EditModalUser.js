import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import notiflix from 'notiflix';

import { useFormik } from 'formik';
import { editUserValidationSchema } from 'utils/editUserValidationSchema';

import { selectUserName, selectAvatarURL } from 'redux/selectors';
import { updateUser } from '../../../../redux/authOperations';
import addAvatarImg from '../../../../images/icons/plus-icon.svg';
import crossIcon from '../../../../images/icons/cross.svg';


import {
  UserIconStyled,
  RedCrossStyled,
  ResetNameButton,
  BackdropEditUserMOdal,
  ModalEditUser,
  CloseButtonStyled,
  PreviewWrap,
  PreviewImageWrap,
  PreviewImage,
  AddImageButton,
  ValidImageText,
  EditNameFormWrap,
  EditNameFormStyled,
  EditBtnWrap,
  EditModalBtn,

  CloseIcon,
} from './EditModalUser.styled';

export const EditUserModal = ({
  openEditMenu,
  handleOpenEditModal,
  stopPropagation,
}) => {

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const avatarURL = useSelector(selectAvatarURL);

  const formik = useFormik({
    initialValues: {
      avatar: avatarURL || '',
      name: userName || '',
    },
    validationSchema: editUserValidationSchema,
    onSubmit: ({ avatar, name }) => {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('avatar', avatar);
      dispatch(updateUser(formData))
        .then(() => {
          return notiflix.Notify.success('User update successful');
        })
        .catch(error => {
          return notiflix.Notify.failure('Error updating');
        });
      handleOpenEditModal();
    },
  });

  useEffect(() => {
    if (openEditMenu) {
      const handleKeyDown = e => {
        if (e.code === 'Escape') {
          handleOpenEditModal();
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [handleOpenEditModal, openEditMenu]);

  useEffect(() => {
    if (openEditMenu) {
      const scrollY = window.scrollY;

      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [openEditMenu]);

  const handleAvatarChange = e => {
    const newAvatar = e.target.files[0];
    formik.setValues({ ...formik.values, avatar: newAvatar });
  };

  const handleResetName = () => {
    formik.resetForm({
      values: {
        ...formik.values,
        name: '',
      },
    });
  };

  // const handleResetImage = () => {
  //   formik.resetForm({
  //     values: {
  //       ...formik.values,
  //       avatar: avatarURL
  //     }
  //   });
  // };

  return (
    <BackdropEditUserMOdal
      className={openEditMenu ? 'open' : ''}
      onClick={handleOpenEditModal}
    >
      <ModalEditUser
        className={openEditMenu ? 'open' : ''}
        onClick={stopPropagation}
      >
        {/* 
        <button
          type='button'
          onClick={handleOpenEditModal}>
          <CloseButton src={crossIcon} alt="close button" width={20} />
        </button> */}
        <button type="button" onClick={handleOpenEditModal}>
          <CloseIcon />
        </button>

        <form onSubmit={formik.handleSubmit}>
          <PreviewWrap>
            <PreviewImageWrap htmlFor="file-upload">
              <PreviewImage
                src={
                  formik.values.avatar instanceof File
                    ? URL.createObjectURL(formik.values.avatar)
                    : avatarURL
                }
                alt="User avatar"
                style={{ display: 'block', margin: '0 auto' }}
              />
            </PreviewImageWrap>

            {formik.errors.avatar ? (
              <ValidImageText>{formik.errors.avatar}</ValidImageText>
            ) : (
              <ValidImageText>Valid image</ValidImageText>
            )}

            <AddImageButton htmlFor="file-upload">
              <img src={addAvatarImg} alt="Upload icon" />
              <input
                style={{ display: 'none' }}
                id="file-upload"
                type="file"
                name="avatar"
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
            <UserIconStyled
              style={{ stroke: formik.errors.name ? '#fa2c2c' : '#8BAA36' }}
            />

            <ResetNameButton onClick={handleResetName} type="button">
              <RedCrossStyled />
            </ResetNameButton>
          </EditNameFormWrap>
          {formik.errors.name ? (
            <ValidImageText>{formik.errors.name}</ValidImageText>
          ) : (
            <ValidImageText>Valid Name</ValidImageText>
          )}

          <EditBtnWrap>
            <EditModalBtn type="submit" disabled={!formik.isValid}>
              Save Changes
            </EditModalBtn>
          </EditBtnWrap>
        </form>
      </ModalEditUser>
    </BackdropEditUserMOdal>
  );
};
