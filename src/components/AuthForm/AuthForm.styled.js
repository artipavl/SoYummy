import styled from 'styled-components';

export const Form = styled.form`
  background: ${props => props.theme.colors.accentDarkMuted};
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  position: absolute;
  width: 335px;
  height: 350px;
  left: 20px;
  top: 305px;
`;

export const FormTitle = styled.h1`
  position: absolute;
  left: 28px;
  top: 32px;

  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;

  color: ${props => props.theme.colors.textWhite}; ;
`;

export const ValuesWrapper = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 35.85%;
  bottom: 35.85%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FormValue = styled.input`
  background-color: transparent;
  color: ${props => props.theme.colors.textWhite};
  height: 45px;
  width: 279px;
  border: 1px solid ${props => props.theme.colors.textWhite};
  border-radius: 6px;
`;

export const FormBtn = styled.button`
  padding: 14px 110px;

  position: absolute;
  width: 279px;
  height: 45px;
  left: 28px;
  top: 265px;

  background: ${props => props.theme.colors.modes.white.accent};

  border-radius: 6px;
`;
