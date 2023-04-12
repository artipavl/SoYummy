import styled from 'styled-components';
import { Field } from 'formik';

export const PreparationWrapper = styled.div`
  width: 100%;
  margin: 60px 0 18px 0;
`;
export const FormSectionTitle = styled.h2`
  font-size: 24px;
  font-family: 'Poppins';
  color: ${props => props.theme.colors.textDark};
  letter-spacing: -0.02em;
  margin-bottom: 28px;
`;
export const RecipeTextarea = styled(Field)`
  width: 100%;
  height: 154px;
  resize: none;
  color: ${props => props.theme.colors.dark};
  opacity: 50%;
  background-color: ${props => props.theme.colors.whiteMuted};
  border: 1px solid ${props => props.theme.colors.whiteMuted};
  border-radius: 6px;
  padding: 10px 16px;
  outline: none;
  font-size: 14px;
  @media ${props => props.theme.device.tablet} {
    width: 65%;
    height: 224px;
    font-size: 18px;
  }
`;
