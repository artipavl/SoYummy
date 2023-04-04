import { useState } from 'react';

import ThemeToogle from 'components/ThemeToogle';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

import logo from '../../images/icons/logo_Desktop.svg';
import lightLogo from '../../images/icons/logo-Lite-Icon.svg'
import tempUserIcon from '../../images/icons/temp-user-icon.png';
import burgerIcon from '../../images/icons/burger.svg'


import {
  Header,
  LinkLogo,
  NavLogo,
  NavLogoLite,
  UserWrap,
  UserIcon,
  UserName,
  ToogleWrap,
  Burger,
} from './Head.styled'

export const Head = () => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = nextChecked => {
    setChecked(nextChecked);
  };

  const handleMenuClick = () => {
    setOpen(!open);
    if (open) {
       document.body.classList.add('modal-open');
    } if (!open) {
      document.body.classList.remove('modal-open');
    }
  };

  return (
    <Header>
      <LinkLogo to="/main">
        <NavLogo src={logo} alt='logo' />
        <NavLogoLite src={lightLogo} alt="logo" width={40} />
      </LinkLogo>
      <DesktopMenu />
      <MobileMenu
        openState={open}
        handleMenuClick={handleMenuClick}
      >
        <ThemeToogle
          handleChange={handleChange}
          checked={checked}
        />
      </MobileMenu >

      <UserWrap>
        <UserIcon src={tempUserIcon} alt="temp user icon" width={44} />

        <UserName>Olena</UserName>
      </UserWrap>

      <Burger onClick={handleMenuClick}>
        <img src={burgerIcon} alt='open mobile menu' width={32} />
      </Burger>

      <ToogleWrap >
        <ThemeToogle
          handleChange={handleChange}
          checked={checked}
        />
      </ToogleWrap>

    </Header>
  );
}



