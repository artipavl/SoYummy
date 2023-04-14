import { Field } from 'formik';
import styled from 'styled-components';
import { RiCloseLine } from 'react-icons/ri';

export const SelectIngredientWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 55% 25% 12%;
  row-gap: 20px;
  grid-gap: 14px;
  @media ${props => props.theme.device.tablet} {
    width: 610px;
    grid-template-columns: 50% 18% 22% 10%;
    grid-gap: 32px;
    row-gap: 24px;
  }
`;
export const IngredientsFieldArray = styled.div`
  position: relative;
  height: 53px;
`;

export const IngredientsSelectInput = styled(Field)`
  height: 53px;
  width: 100%;
  grid-column: 1;
  padding: 16px;
  border-radius: 6px;
  opacity: 50%;
  border: 1px solid ${props => props.theme.colors.whiteMuted};
  background-color: ${props => props.theme.colors.whiteMuted};
  color: ${props => props.theme.colors.dark};
  outline: none;
  @media ${props => props.theme.device.tablet} {
    font-size: 18px;
  }
`;

export const ListIngredientsShown = styled.ul`
  position: absolute;
  width: 95%;
  max-height: 120px;
  overflow-y: auto;
  top: 100%;
  left: 0;
  background-color: ${props => props.theme.colors.bgWhite};
  z-index: 100;
  border-radius: 6px;
  padding: 8px 18px;
  text-overflow: ellipsis;
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
  width: 100%;
  height: 53px;
  align-items: baseline;
  margin-bottom: 20px;
  border: 1px solid ${props => props.theme.colors.whiteMuted};
  background-color: ${props => props.theme.colors.whiteMuted};
  border-radius: 6px;
`;
export const WrapperMeasureSelect = styled.div`
  /* position: relative; */

  width: 100%;

  padding: 0;
  grid-column: 2;
  cursor: pointer;
  background-color: ${props => props.theme.colors.whiteMuted};
`;
export const MeasureInput = styled.input`
  font-family: 'Poppins';
  width: 90%;
  padding: 10px 0 10px 10px;
  border: none;
  border-radius: 6px 6px 6px 6px;
  outline: none;
  text-align: right;

  border-color: ${props => props.theme.colors.whiteMuted};
  background-color: ${props => props.theme.colors.whiteMuted};
  color: ${props => props.theme.colors.text};
`;
export const StyledSelect = styled.div`
  display: flex;
  top: 0;
  right: 0;
  padding-top: 15px;

  height: 100%;
  justify-content: right;
  gap: 5px;
  font-size: 12px;
  background-color: ${props => props.theme.colors.whiteMuted};
  @media ${props => props.theme.device.tablet} {
    font-size: 14px;
  }
`;

export const MeasureSelect = styled.input`
  display: block;

  width: 10%;
  height: 100%;
  border: transparent;
  background-color: ${props => props.theme.colors.whiteMuted};
  /* padding-bottom: 18px; */
  outline: transparent;
  font-size: 14px;
  cursor: pointer;
  color: ${props => props.theme.colors.dark};

  &::placeholder {
    font-size: 14px;
    color: ${props => props.theme.colors.dark};
    opacity: 50%;
  }
  @media ${props => props.theme.device.tablet} {
    font-size: 16px;

    &::placeholder {
      font-size: 16px;
    }
  }
`;
export const OptionWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  height: 19px;
  font-size: 14px;
  color: ${props => props.theme.colors.text};
  @media ${props => props.theme.device.tablet} {
    font-size: 16px;
  }
`;

export const WrapperArrow = styled.span`
  height: auto;
  display: inline-flex;
`;

export const SelectContainer = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 100%;
  right: 0;
  z-index: 5;
  height: 112px;
  width: 100%;

  overflow-y: auto;
  border-radius: 6px;
  font-size: 12px;
  color: ${props => props.theme.colors.dark};
  background: ${props => props.theme.colors.bgWhite};
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  @media ${props => props.theme.device.tablet} {
    padding: 8px 18px;
    height: 128px;
  }
`;
export const SelectItem = styled.li`
  color: ${props => props.theme.colors.dark};
  font-size: 14px;
  &:not(:last-child) {
    margin-bottom: 4px;
  }
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
  @media ${props => props.theme.device.tablet} {
    font-size: 16px;
  }
`;

export const DeleteButton = styled.button`
  display: flex;
  height: 53px;
  grid-column: 3;
  align-items: center;
  justify-content: center;
  width: 20px;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.accent};
  }
  @media ${props => props.theme.device.tablet} {
    margin-left: auto;
  }
`;

export const CloseIcon = styled(RiCloseLine)`
  color: ${props => props.theme.colors.profileModalCloseIcon};

  font-size: 20px;
`;
