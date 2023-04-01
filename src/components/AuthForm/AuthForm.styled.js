import styled from 'styled-components';

import nameIcon from '../../images/icons/name.svg';
import emailIcon from '../../images/icons/email.svg';
import passwordIcon from '../../images/icons/password.svg';

export const SignUpLogo = styled.img`
  @media ${props => props.theme.device.mobile} {
    padding-top: 87px;
    padding-left: 45px;
    padding-right: 45px;
  }
`;

export const Form = styled.form`
  @media ${props => props.theme.device.mobile} {
    background: ${props => props.theme.colors.accentDarkMuted};
    box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
    border-radius: 30px;

    position: absolute;
    width: 335px;
    height: 350px;
    left: 20px;
    top: 305px;

    display: flex;
    flex-direction: column;
  }

  @media ${props => props.theme.device.tablet} {
  }

  @media ${props => props.theme.device.desktop} {
  }
`;

export const FormTitle = styled.h1`
  @media ${props => props.theme.device.mobile} {
    margin-top: 32px;
    margin-bottom: 18px;
    margin-left: 28px;

    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.02em;

    color: ${props => props.theme.colors.textWhite};
  }

  @media ${props => props.theme.device.tablet} {
  }

  @media ${props => props.theme.device.desktop} {
  }
`;

export const FormValue = styled.input`
  @media ${props => props.theme.device.mobile} {
    background-color: transparent;
    color: ${props => props.theme.colors.textWhite};
    height: 45px;
    border: 1px solid ${props => props.theme.colors.textWhite};
    border-radius: 6px;
    padding-left: 17px;

    margin-left: 28px;
    margin-right: 28px;

    &::placeholder {
      background: url(${nameIcon}) no-repeat;
    }

    &:nth-of-type(2)::placeholder {
      background: url(${emailIcon}) no-repeat;
    }

    &:nth-of-type(3)::placeholder {
      background: url(${passwordIcon}) no-repeat;
    }

    &:not(:last-of-type) {
      margin-bottom: 12px;
    }
  }

  @media ${props => props.theme.device.tablet} {
  }

  @media ${props => props.theme.device.desktop} {
  }
`;

export const FormBtn = styled.button`
  @media ${props => props.theme.device.mobile} {
    padding: 14px 110px;

    margin-left: 28px;
    margin-right: 28px;
    margin-top: 28px;

    background: ${props => props.theme.colors.modes.white.accent};

    border-radius: 6px;
  }

  @media ${props => props.theme.device.tablet} {
  }

  @media ${props => props.theme.device.desktop} {
  }
`;
