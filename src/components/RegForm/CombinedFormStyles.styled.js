import styled from 'styled-components';

import { ReactComponent as NameIcon } from '../../images/icons/name.svg';
import { ReactComponent as EmailIcon } from '../../images/icons/email.svg';
import { ReactComponent as PasswordIcon } from '../../images/icons/password.svg';

// import bgDesktop from '../../images/bg/registrBG_Desktop.svg';
import bgTablet from '../../images/bg/registrBG_Tablet.svg';
import bgMobile from '../../images/bg/registrBG_Mobile.svg'

import validationInputLogo from 'utils/validationInputLogo';

import { Link } from 'react-router-dom';

export const Name = styled(NameIcon)`
  position: absolute;
  top: 25px;
  left: 45px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  @media ${props => props.theme.device.tablet} {
    width: 24px;
    height: 24px;
    top: 35px;
    left: 50px;
  }
  @media ${props => props.theme.device.desktop} {
    top: 35px;
    left: 50px;
  }
`;

export const Email = styled(EmailIcon)`
  position: absolute;
  top: 25px;
  left: 45px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  @media ${props => props.theme.device.tablet} {
    width: 24px;
    height: 24px;
    top: 35px;
    left: 50px;
  }
  @media ${props => props.theme.device.desktop} {
    top: 35px;
    left: 50px;
  }
`;

export const Pswrd = styled(PasswordIcon)`
  position: absolute;
  top: 25px;
  left: 45px;
  transform: translateY(-50%);
  width: 18px;
  height: 18px;
  @media ${props => props.theme.device.tablet} {
    width: 24px;
    height: 24px;
    top: 35px;
    left: 50px;
  }
  @media ${props => props.theme.device.desktop} {
    top: 35px;
    left: 50px;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;

  max-height: 100%;
  min-height: 100vh;
  background-image: url('${bgMobile}');
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 100% 57vh;

  @media ${props => props.theme.device.tablet} {
    background-image: url('${bgTablet}');
    background-size: 100% 51vh;
  }

  @media ${props => props.theme.device.desktop}  {
    background-size: 100% 46vh;
  }


`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  @media ${props => props.theme.device.desktop} {
    flex-direction: row;

  }
`;

export const SignUpLogo = styled.img`
  /* margin-top: 96px; */

  z-index: 1;

  @media ${props => props.theme.device.tablet} {
    width: 409px;
    /* margin-top: 115px; */
  }

  @media ${props => props.theme.device.desktop} {
    width: 532px;
    margin-right: 115px;
    margin-top: 0;
  }
`;

export const Form = styled.form`
  background: ${props => props.theme.colors.accentDarkMuted};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  z-index: 1;
  position: relative;

  width: 335px;

  display: flex;
  flex-direction: column;

  @media ${props => props.theme.device.tablet} {
    width: 500px;
  }

  @media ${props => props.theme.device.desktop} {
  }
`;

export const FormTitle = styled.h1`
  margin-top: 32px;
  margin-bottom: 18px;
  margin-left: 28px;

  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 24px;
  line-height: 1.17;

  color: ${props => props.theme.colors.textWhite};

  @media ${props => props.theme.device.tablet} {
    font-size: 28px;
    line-height: 1.07;
  }

  @media ${props => props.theme.device.desktop} {
  }
`;

export const FormValueContainer = styled.div`
  display: flex;
  position: relative;

  &:not(:first-of-type) {
    margin-top: 12px;
  }

  &::after {
    content: '';
    display: block;

    position: absolute;
    top: 14px;
    right: 45px;

    width: 20px;
    height: 20px;

    background-image: ${validationInputLogo};

    @media ${props => props.theme.device.tablet} {
      top: 22px;
      right: 45px;
    }

    @media ${props => props.theme.device.desktop} {
      top: 23px;
      right: 50px;
    }
  }

  @media ${props => props.theme.device.tablet} {
    &:not(:first-of-type) {
      margin-top: 24px;
    }
  }
`;

export const FormBtn = styled.button`
  padding: 14px;

  margin-left: 28px;
  margin-right: 28px;
  margin-top: 28px;
  margin-bottom: 40px;

  background: ${props => props.theme.colors.modes.white.accent};

  border-radius: 6px;

  font-size: 16px;
  line-height: 1.12;

  color: ${props => props.theme.colors.whiteMuted};

  &:hover {
    background-color: ${props => props.theme.colors.whiteMuted};
    color: ${props => props.theme.colors.dark};
    transition: all 250ms linear 0s;
  }

  @media ${props => props.theme.device.tablet} {
    margin-top: 50px;
    margin-bottom: 44px;

    height: 59px;
  }

  @media ${props => props.theme.device.desktop} {
  }
`;

export const FormNavLink = styled(Link)`
  color: ${props => props.theme.colors.textWhite};
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  text-decoration: underline;

  margin-top: 18px;

  &:hover {
    color: ${props => props.theme.colors.whiteMuted};
  }

  @media ${props => props.theme.device.tablet} {
    font-size: 16px;
    line-height: 1.5;
  }

  @media ${props => props.theme.device.desktop} {
  }
`;

export const RegisterWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`

