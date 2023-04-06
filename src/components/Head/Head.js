import { useState } from 'react';

import ThemeToogle from 'components/ThemeToogle';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import UserMenu from './UserMenu';

import logo from '../../images/icons/logo_Desktop.svg';
import lightLogo from '../../images/icons/logo-Lite-Icon.svg'
import burgerIcon from '../../images/icons/burger.svg'

import {
  Header,
  Container,
  LinkLogo,
  NavLogo,
  NavLogoLite,
  UserWrapButton,
  UserIcon,
  TempAvatar,
  UserName,
  ToogleWrap,
  Burger,
} from './Head.styled'


export const Head = () => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    setImage(null);
    document.getElementById('imageUpload').value = null;
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
    console.log(event.target.value)
  }

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

  const handleOpenSmallUserMenu = () => {
    setOpenUser(!openUser);
  }

  return (
    <>
      <Header>
        <Container>
          <LinkLogo to="/main">
            <NavLogo src={logo} alt='logo' />
            <NavLogoLite src={lightLogo} alt="logo" width={40} />
          </LinkLogo>
          <DesktopMenu />

          <UserWrapButton onClick={handleOpenSmallUserMenu}>
            {image ? (<UserIcon src={image} alt="user avatar" width={44} />) : (<TempAvatar />)}
            <UserName>{name === '' ? "User" : name}</UserName>
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
        </Container>

      </Header>
      <UserMenu
        openUser={openUser}
        handleOpenSmallUserMenu={handleOpenSmallUserMenu}
        image={image}
        name={name}
        handleImageUpload={handleImageUpload}
        handleImageRemove={handleImageRemove}
        handleChangeName={handleChangeName}

      />
      <MobileMenu
        openState={open}
        handleMenuClick={handleMenuClick}
      >
        <ThemeToogle
          handleChange={handleChange}
          checked={checked}
        />
      </MobileMenu >

    </>

  );
}
