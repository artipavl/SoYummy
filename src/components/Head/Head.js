import { useState } from 'react';

import { selectUserName, selectAvatarURL, selectAuthIsLoading } from 'redux/selectors';
import { useSelector } from 'react-redux';

import ThemeToogle from 'components/ThemeToogle';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import UserMenu from './UserMenu';
import { Loader } from 'components/Loader/Loader';

import logo from '../../images/icons/logo_Desktop.svg';
import lightLogo from '../../images/icons/logo-Lite-Icon.svg';


import {
  Header,
  Container,
  LinkLogo,
  NavLogo,
  NavLogoLite,
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
            <NavLogoLite src={lightLogo} alt="logo" width={40} />
          </LinkLogo>

          <DesktopMenu />

          <UserToogleWrap>
            {isLoading ? (<Loader/>) : (<UserWrapButton onClick={handleOpenSmallUserMenu}>
              <UserIcon src={userAvatar} alt="user avatar" width={44} />
              <UserName>{userName}</UserName>

            </UserWrapButton>) }

            <UserMenu
                openUser={openUser}
                handleOpenSmallUserMenu={handleOpenSmallUserMenu}
              />

            <Burger onClick={handleMenuClick}>
              <BurgerIconStyled/>
            </Burger>

            <ToogleWrap>
              <ThemeToogle handleChange={handleChange} checked={checked} />
            </ToogleWrap>
          </UserToogleWrap>
        </Container>
      </Header>


      <MobileMenu openState={open} handleMenuClick={handleMenuClick}>
        <ThemeToogle />
      </MobileMenu>
    </>
  );
};
