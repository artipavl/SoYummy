import { useState } from 'react';

import { useLocation } from 'react-router-dom';

import { selectUserName, selectAvatarURL, selectAuthIsLoading } from 'redux/selectors';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router';

import ThemeToogle from 'components/ThemeToogle';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import UserMenu from './UserMenu';
import ButtonLoader from 'components/ButtonLoader';

import logo from '../../images/icons/logo_Desktop.svg';

import {
  Header,
  Container,
  LinkLogo,
  NavLogo,
  UserToogleWrap,
  UserWrapButton,
  UserIcon,
  UserName,
  ToogleWrap,
  Burger,
  BurgerIconStyled,
} from './Head.styled';

export const Head = () => {
  const [open, setOpen] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [checked, setChecked] = useState(false);

  const userName = useSelector(selectUserName);
  const userAvatar = useSelector(selectAvatarURL);
  const isLoading = useSelector(selectAuthIsLoading)
  // const { recipeId = null } = useParams();
  const { pathname } = useLocation()

  console.log(pathname)


  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

  const handleMenuClick = () => {
    setOpen(!open);
    if (open) {
      document.body.classList.add('modal-open');
    }
    if (!open) {
      document.body.classList.remove('modal-open');
    }
  };

  const handleOpenSmallUserMenu = () => {
    setOpenUser(!openUser);
  };

  return (
    <>
      <Header>
        <Container>
          <LinkLogo to="/main">
            <NavLogo src={logo} alt="logo" />
            {/* <NavLogoLite src={lightLogo} alt="logo" width={40} /> */}
          </LinkLogo>

          <DesktopMenu />

          <UserToogleWrap>

            <UserWrapButton onClick={handleOpenSmallUserMenu}>
              {isLoading ? <ButtonLoader /> : <UserIcon src={userAvatar} alt="user avatar" width={44} />}

              <UserName pathname={pathname}>{userName}</UserName>

            <UserMenu
              openUser={openUser}
              handleOpenSmallUserMenu={handleOpenSmallUserMenu}
            />

            </UserWrapButton>



            <Burger onClick={handleMenuClick}>
              <BurgerIconStyled />
            </Burger>

            <ToogleWrap>
              <ThemeToogle handleChange={handleChange} checked={checked} />
            </ToogleWrap>
          </UserToogleWrap>
        </Container>

        <MobileMenu openState={open} handleMenuClick={handleMenuClick}>
          <ThemeToogle />
        </MobileMenu>

      </Header>



    </>
  );
};
