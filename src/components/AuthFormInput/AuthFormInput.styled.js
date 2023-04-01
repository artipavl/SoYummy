import styled from 'styled-components';

import nameIcon from '../../images/icons/name.svg';
import emailIcon from '../../images/icons/email.svg';
import passwordIcon from '../../images/icons/password.svg';

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
