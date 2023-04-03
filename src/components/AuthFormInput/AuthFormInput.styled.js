import styled from 'styled-components';

import nameIcon from '../../images/icons/name.svg';
import emailIcon from '../../images/icons/email.svg';
import passwordIcon from '../../images/icons/password.svg';

import validationInputLogo from 'utils/validationInputLogo';
import checkValidationLevel from 'utils/checkValidationLevel';

import formStyles from 'utils/formStyles';

export const FormValueContainer = styled.div`
  display: flex;
  position: relative;

  margin-bottom: ${({ error, touched }) => {
    return error && touched ? '0' : '12px';
  }};

  /* &::before {
    content: '';
    width: 20px;
    height: 20px;
  }

  &:nth-of-type(1)::before {
    background: url(${nameIcon}) no-repeat;
  }

  &:nth-of-type(2)::before {
    background: url(${emailIcon}) no-repeat;
  }

  &:nth-of-type(3)::before {
    background: url(${passwordIcon}) no-repeat;
  } */

  &::after {
    content: '';
    display: block;

    position: absolute;
    top: 20px;
    right: 50px;

    width: 20px;
    height: 20px;

    background-image: ${validationInputLogo};
  }
`;

export const FormValue = styled.input`
  background-color: transparent;
  color: ${props => props.theme.colors.textWhite};

  border: 1px solid ${props => props.theme.colors.textWhite};
  border-radius: 6px;
  padding-left: 17px;

  height: 45px;
  width: 279px;

  margin-left: 28px;
  margin-right: 28px;

  opacity: 0.8;

  border-color: ${({ error, touched, value }) => {
    if (!value) {
      return 'inherit';
    }

    return error
      ? formStyles.message.error.color
      : touched
      ? formStyles.message.success.color
      : 'inherit';
  }};

  &:hover {
    opacity: 1;
  }

  @media ${props => props.theme.device.tablet} {
    height: 59px;
    width: 100%;

    font-size: 18px;
    line-height: 1.5;

    &:not(:last-of-type) {
      margin-bottom: 24px;
    }
  }

  @media ${props => props.theme.device.desktop} {
  }
`;
