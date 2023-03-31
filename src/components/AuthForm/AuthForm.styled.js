import styled from 'styled-components';

export const Form = styled.form`
  background: #2a2c36;
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
  width: 144px;
  height: 28px;
  left: 28px;
  top: 32px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;

  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;

  color: #fafafa;
`;

export const ValuesWrapper = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 35.85%;
  display: flex;
  align-items: center;
  flex-direction: column;
  bottom: 35.85%;
`;

export const FormValue = styled.input`
  background-color: transparent;
  color: #fafafa;
  height: 45px;
  width: 279px;
  border: 1px solid #fafafa;
  border-radius: 6px;
`;

export const FormBtn = styled.button`
  padding: 14px 110px;

  position: absolute;
  width: 279px;
  height: 45px;
  left: 28px;
  top: 265px;

  background: #8baa36;
  border-radius: 6px;
`;
