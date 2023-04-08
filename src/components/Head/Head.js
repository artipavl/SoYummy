import { useState } from 'react';

import { selectUserName, selectAvatarURL } from 'redux/selectors';
import { useSelector } from 'react-redux';

import ThemeToogle from 'components/ThemeToogle';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import UserMenu from './UserMenu';

import logo from '../../images/icons/logo_Desktop.svg';
import lightLogo from '../../images/icons/logo-Lite-Icon.svg';
import burgerIcon from '../../images/icons/burger.svg';

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
} from './Head.styled'

export const Head = () => {
  const [open, setOpen] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [checked, setChecked] = useState(false);

  const userName = useSelector(selectUserName)
  const userAvatar = useSelector(selectAvatarURL)

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
            <UserWrapButton onClick={handleOpenSmallUserMenu}>
              <UserIcon src={userAvatar} alt="user avatar" width={44} />
              <UserName>{userName}</UserName>
            </UserWrapButton>

            <Burger onClick={handleMenuClick}>
              <img src={burgerIcon} alt='open mobile menu' width={32} />
            </Burger>

            <ToogleWrap >
              <ThemeToogle
                handleChange={handleChange}
                checked={checked}
              />
            </ToogleWrap>
          </UserToogleWrap>

        </Container>
      </Header>

      <UserMenu
        openUser={openUser}
        handleOpenSmallUserMenu={handleOpenSmallUserMenu}
      />
      <MobileMenu
        openState={open}
        handleMenuClick={handleMenuClick}>
        <ThemeToogle />
      </MobileMenu>
    </>
  );
};
