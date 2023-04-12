import { Field } from 'formik';
import styled from 'styled-components';

export const SelectIngredientWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 55% 25% 12%;
  row-gap: 20px;
  grid-gap: 14px;
  @media ${props => props.theme.device.tablet} {
    width: 610px;
    grid-template-columns: 50% 15% 25% 10%;
    grid-gap: 32px;
    row-gap: 24px;
  }
`;
export const IngredientsFieldArray = styled.div`
  position: relative;
`;

export const IngredientsSelectInput = styled(Field)`
  height: 53px;
  width: 100%;
  padding: 16px;
  border-radius: 6px;
  border: none;
  background-color: ${props => props.theme.colors.whiteMuted};
  outline: none;
  @media ${props => props.theme.device.tablet} {
    font-size: 18px;
  }
`;

export const ListIngredientsShown = styled.ul`
  position: absolute;
  width: 95%;
  height: 110px;
  overflow-y: auto;
  top: 100%;
  left: 0;
  background-color: ${props => props.theme.colors.bgWhite};
  z-index: 100;
  border-radius: 6px;
`;

export const ItemIngredientsShown = styled.li`
  width: 100%;
  border: none;
  font-size: 12px;
  color: ${props => props.theme.colors.dark};

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

export const MeasureContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-radius: 4px;
`;

export const MeasureInput = styled.input`
  width: 100%;
  height: 53px;
  padding: 16px 0 16px 16px;
  border: none;
  border-radius: 6px 6px 6px 6px;
  outline: none;
  border-color: ${props => props.theme.colors.whiteMuted};
  background-color: ${props => props.theme.colors.whiteMuted};
  color: ${props => props.theme.colors.dark};
`;

export const MeasureSelect = styled.select`
  position: absolute;
  height: 53px;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  padding: 16px 22px 16px 0;
  border: none;
  border-radius: 0 6px 6px 0;
  outline: none;
  font-size: 12px;
  border-color: ${props => props.theme.colors.whiteMuted};
  background-color: ${props => props.theme.colors.whiteMuted};
  color: ${props => props.theme.colors.dark};
  opacity: 50%;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path fill="green" d="M5.3 6.3L8 9l2.7-2.7c.4-.4 1-.4 1.4 0l.7.7c.4.4.4 1 0 1.4l-4 4c-.4.4-1 .4-1.4 0l-4-4c-.4-.4-.4-1 0-1.4l.7-.7c.4-.4 1-.4 1.4 0z"/></svg>')
    no-repeat;
  background-position: right 10px top 50%;
  background-size: 14px 14px;
  appearance: none;
  @media ${props => props.theme.device.tablet} {
    font-size: 14px;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  height: 53px;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
  @media ${props => props.theme.device.tablet} {
    margin-left: auto;
  }
`;
