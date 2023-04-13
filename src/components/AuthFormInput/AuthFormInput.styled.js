import styled from 'styled-components';

import nameIcon from '../../images/icons/name.svg';
import emailIcon from '../../images/icons/email.svg';
import passwordIcon from '../../images/icons/password.svg';

import validationInputLogo from 'utils/validationInputLogo';

import formStyles from 'utils/formStyles';

export const FormValueContainer = styled.div`
  display: flex;
  position: relative;

  &:not(:first-of-type) {
    margin-top: 12px;
  }

  &::before {
    content: '';
    width: 18px;
    height: 18px;
    position: absolute;

    top: 16px;
    left: 45px;

    @media ${props => props.theme.device.tablet} {
      top: 23px;
      left: 50px;
    }

    @media ${props => props.theme.device.desktop} {
      top: 23px;
      left: 50px;
    }
  }

  &:nth-of-type(1)::before {
    background: url(${nameIcon}) no-repeat;
  }

  &:nth-of-type(2)::before {
    background: url(${emailIcon}) no-repeat;
  }

  &:nth-of-type(3)::before {
    background: url(${passwordIcon}) no-repeat;
  }

  &::after {
    content: '';
    display: block;

    position: absolute;
    top: 16px;
    right: 45px;

    width: 20px;
    height: 20px;

    background-image: ${validationInputLogo};

    @media ${props => props.theme.device.desktop} {
      top: 23px;
      right: 50px;
    }
  }
`;

export const FormValue = styled.input`
  background-color: transparent;

  color: ${props => props.theme.colors.textWhite};

  border: 1px solid ${props => props.theme.colors.textWhite};
  border-radius: 6px;
  padding-left: 40px;

  height: 45px;
  width: 279px;

  margin-left: 28px;
  margin-right: 28px;

  opacity: 0.8;

  border-color: ${({ error, value, warn, touched }) => {
    if (!value || warn || !touched) {
      return 'inherit';
    }

    if (error) {
      return formStyles.message.error.color;
    }

    return formStyles.message.success.color;
  }};

  &:hover {
    opacity: 1;
  }

  @media ${props => props.theme.device.tablet} {
    height: 59px;
    width: 100%;

    padding-left: 50px;

    font-size: 18px;
    line-height: 1.5;

    &:not(:last-of-type) {
      margin-bottom: 24px;
    }
  }

  @media ${props => props.theme.device.desktop} {
  }
`;
