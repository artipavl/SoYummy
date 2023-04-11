import styled from 'styled-components';

import { ReactComponent as EmailIcon } from '../../../images/icons/email-icon-for-footer.svg';
import { ReactComponent as ErrorLogo } from '../../../images/icons/Error-logo.svg';
import { ReactComponent as SuccessLogo } from "../../../images/icons/Success-logo.svg";

// import { CiMail } from "react-icons/ci";

//icons
export const EmailIconStyled = styled(EmailIcon)`
  position: absolute;
  display: inline-block;
  width: 26px;
  height: 12px;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  path {
    stroke: ${props => props.errorformik? '#E74A3B' : '#3CBC81'}
  }
  @media ${props => props.theme.device.tablet} {
    left: 16px;
    width: 22px;
    height: 19px;
  }

`

export const ErrorLogoStyled = styled(ErrorLogo)`
    width: 20px;
    transition: transform 0.5s ease;
  &:hover {
    transform: rotate(360deg);
  }
`

export const SuccessLogoStyled = styled(SuccessLogo)`
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`
//

export const FormFooter = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  @media ${props => props.theme.device.tablet} {
    margin-top: 72px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  @media ${props => props.theme.device.desktop} {
    display: block;
    margin-top: 28px;
  }
`
export const InputWrapper = styled.div`
position: relative;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 204px;
    margin: 0 auto;
  }

`
export const FormFooterInput = styled.input`
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  padding: 0;
  padding-left: 42px;
  padding-right: 42px;
  width: 204px;
  height: 38px;
  font-size: 10px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: 15px 13px;
  background-size: 16px 12px;
  color: ${({ error, touched }) =>
    touched ? (error ? '#E74A3B' : '#3CBC81') : '#3CBC81'};
  border-radius: 6px;
  border: 1px solid ${({ error, touched }) =>
    touched ? (error ? '#E74A3B' : '#3CBC81') : '#3CBC81'};

  color: ${props => {
    console.log(props.themeName)

  }
  };


  @media ${props => props.theme.device.tablet} {
      font-size: 14px;
    }

    @media ${props => props.theme.device.desktop} {
      font-size: 18px;
    }


  &::placeholder {
    font-size: 10px;
    font-weight: 400;
    color: ${({ error, touched }) =>
      touched ? (error ? '#E74A3B' : '#3CBC81') : '#3CBC81'};;
    opacity: 1;


    @media ${props => props.theme.device.tablet} {
      font-size: 14px;
    }

    @media ${props => props.theme.device.desktop} {
      font-size: 18px;
    }
  }

  @media ${props => props.theme.device.tablet} {
    margin: 0;
    padding-left: 51px;
    width: 259px;
    height: 50px;
    background-position: 15px 12px;
    background-size: 20px 16px;
    background-position: 18px 15px;
  }
  @media ${props => props.theme.device.desktop}{
    width: 100%;
  }

`

export const ResetFormInput = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);

`

export const Error = styled.div`
  position: absolute;
  /* top: -25px; */
  bottom: -17px;
  right: 50%;
  width: 100%;
  transform: translateX(50%);
  color: #E74A3B;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

export const FormFooterBtn = styled.button`
  display: block;
  margin: 0 auto;
  margin-top: 15px;
  padding: 11px 71px;
  font-size: 12px;
  background-color: ${props => props.theme.colors.accent} ;
  border-radius: 6px;
  transition: color 250ms linear;

  @media ${props => props.theme.device.tablet} {
    margin-top: 8px;
  }

  &:hover, &:focus {
    color: ${props => props.theme.colors.accentDark}
  }
  :disabled {
    background-color: ${props => props.theme.colors.accentDarkMuted};
    color: ${props => props.theme.colors.textWhiteMuted};
   &:hover:disabled, &:focus:disabled {

      color: initial;
      cursor: not-allowed;
    }

  }


  @media ${props => props.theme.device.tablet} {
    margin-top: 0;
    margin: 0;
    margin-left: 12px;
    padding: 16px 50px;
    font-size: 16px;
  }

  @media ${props => props.theme.device.desktop} {
    margin-left: 0;
    margin-top: 16px;
    width: 100%;
  }
`
