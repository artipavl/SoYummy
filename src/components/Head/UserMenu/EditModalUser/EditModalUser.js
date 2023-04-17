import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

import notiflix from 'notiflix';

import { useFormik } from 'formik';
import { editUserValidationSchema } from 'utils/editUserValidationSchema';

import { selectUserName, selectAvatarURL } from 'redux/selectors';
import { updateUser } from '../../../../redux/authOperations';
import notImage from '../../../../images/icons/not-supported-image.svg';

import {
  AddImageIconStyled,
  UserIconStyled,
  RedCrossStyled,
  ResetNameButton,
  BackdropEditUserMOdal,
  ModalEditUser,
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

  const formik = useFormik({
    initialValues: {
      avatar: avatarURL,
      name: userName,
    },

    validationSchema: editUserValidationSchema,
    onSubmit: ({ avatar, name }) => {
      const formData = new FormData();
      formData.append('name', name);

      if (avatar !== avatarURL) {
        formData.append('avatar', avatar);
      }

      dispatch(updateUser(formData))
        .then(() => {
          return notiflix.Notify.success('User has been updated successfully');
        })
        .catch(error => {
          return notiflix.Notify.failure('Error updating');
        });
      handleOpenEditModal();
    },
  });

  const handleAvatarChange = e => {
    const avatar = e.target.files[0];
    formik.setValues({ ...formik.values, avatar });
  };

  const handleChangeName = e => {
    formik.setValues({ ...formik.values, name: e.target.value });
  };

  const handleResetName = () => {
    formik.resetForm();
    formik.setValues({
      ...formik.values,
      name: '',
    });
  };

  const handleResetImage = () => {
    formik.resetForm();
    formik.setValues({
      ...formik.values,
      avatar: '',
    });
  };

  return (
    <BackdropEditUserMOdal
      className={openEditMenu ? 'open' : ''}
      onClick={handleOpenEditModal}
    >
      <ModalEditUser
        className={openEditMenu ? 'open' : ''}
        onClick={stopPropagation}
      >
        <button type="button" onClick={handleOpenEditModal}>
          <CloseIcon />
        </button>

        <form onSubmit={formik.handleSubmit}>
          <PreviewWrap>
            <PreviewImageWrap htmlFor="file-upload">
              <PreviewImage
                src={
                  formik.values.avatar
                    ? formik.values.avatar instanceof File
                      ? URL.createObjectURL(formik.values.avatar)
                      : formik.values.avatar
                    : notImage
                }
                alt="User avatar"
                style={{ display: 'block', margin: '0 auto' }}
                width={103}
              />
            </PreviewImageWrap>

            {formik.errors.avatar ? (
              <ValidImageText>{formik.errors.avatar}</ValidImageText>
            ) : (
              <ValidImageText>Valid image</ValidImageText>
            )}

            <AddImageButton htmlFor="file-upload">
              {formik.values.avatar === '' ||
              formik.values.avatar === undefined ? (
                <AddImageIconStyled />
              ) : (
                <button type="button" onClick={handleResetImage}>
                  <RedCrossStyled />
                </button>
              )}

              <input
                style={{ display: 'none' }}
                id="file-upload"
                type="file"
                accept="image/jpeg, image/png, image/jpg "
                name="avatar"
                onChange={handleAvatarChange}
                onBlur={formik.handleBlur}
                error={formik.errors.avatar}
                touch={formik.touched.avatar}
              />
            </AddImageButton>
          </PreviewWrap>

          <EditNameFormWrap>
            <EditNameFormStyled
              type="text"
              id="name"
              placeholder="Enter your name"
              value={formik.values.name}
              onChange={handleChangeName}
              onBlur={formik.name}
              error={formik.errors.name}
            />
            <UserIconStyled
              style={{ stroke: formik.errors.name ? '#E74A3B' : '#3CBC81' }}
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
