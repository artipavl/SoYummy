import styled from 'styled-components';

import { Form, Field, ErrorMessage } from 'formik';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsDashLg } from 'react-icons/bs';

export const Error = styled(ErrorMessage)`
  width: 100%;
  display: block;
  font-size: 12px;
  color: ${props => props.theme.colors.textError};
  margin-top: -20px;
  padding: 0;
`;
export const AddForma = styled(Form)`
  display: flex;
  flex-direction: column;
  padding-top: 72px;
  width: 100%;
  margin-bottom: 72px;

  @media ${props => props.theme.device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    padding-top: 100px;
    margin-bottom: 100px;
  }
  @media ${props => props.theme.device.desktop} {
    width: 800px;
    margin-bottom: 0;
  }
`;
export const CustomInputContainer = styled.div`
  position: relative;
  width: 279px;
  height: 268px;
  background-color: ${props => props.theme.colors.accentCurrent};
  border-radius: 8px;
  margin: 0 32px 104px 0;
  @media ${props => props.theme.device.tablet} {
    margin: 0 32px 104px 0;
  }
  @media ${props => props.theme.device.desktop} {
    width: 357px;
    height: 344px;
    margin: 0 50px 104px 0;
  }
`;
export const ImageLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const ImageInput = styled.input`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  opacity: 0;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const RecipePhoto = styled.img`
  display: block;
  max-width: 100%;
  height: 268px;
  border-radius: 8px;
  @media ${props => props.theme.device.desktop} {
    width: 357px;
    height: 344px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 67px;
  @media ${props => props.theme.device.tablet} {
    width: 390px;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const InputField = styled(Field)`
  width: 100%;
  padding-bottom: 18px;
  margin-bottom: 24px;
  border: none;
  border-bottom: 1px solid
    ${props => props.theme.colors.blackAndWhiteBrorderList};
  color: ${props => props.theme.colors.text};
  outline: none;
  font-size: 14px;
  background-color: transparent;
  cursor: pointer;

  &::placeholder {
    color: ${props => props.theme.colors.dark};
    opacity: 50%;
  }
  @media ${props => props.theme.device.tablet} {
    margin-bottom: 32px;
    font-size: 16px;
  }
  @media ${props => props.theme.device.desktop} {
    margin-bottom: 40px;
  }
`;

export const CategoryWrapper = styled.div`
  position: relative;
  cursor: pointer;
  margin-bottom: 24px;
  @media ${props => props.theme.device.tablet} {
    margin-bottom: 32px;
  }
  @media ${props => props.theme.device.desktop} {
    margin-bottom: 40px;
  }
`;
export const Input = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  border: transparent;
  background-color: inherit;
  border-bottom: 1px solid
    ${props => props.theme.colors.blackAndWhiteBrorderList};
  padding-bottom: 18px;
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
    width: 393px;
    height: 43px;
    &::placeholder {
      font-size: 16px;
    }
  }
`;

export const OptionWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  height: 19px;
  color: ${p => p.theme.colors.text};
`;

export const WrapperArrow = styled.span`
  height: auto;
  display: inline-flex;
  color: ${p => p.theme.colors.text};
`;
export const SelectInput = styled(Field)`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  color: ${p => p.theme.colors.text};
  opacity: 50%;
  overflow-y: auto;
  max-height: 120px;
  border: none;
  @media ${props => props.theme.device.tablet} {
    font-size: 16px;
  }
`;
export const StyledSelect = styled.div`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  padding-top: 3px;
  width: 100%;
  height: 100%;
  justify-content: right;
  gap: 13px;
  font-size: 12px;

  @media ${props => props.theme.device.tablet} {
    font-size: 14px;
  }
`;

export const SelectContainer = styled.ul`
  position: absolute;
  top: 27px;
  right: 0;
  z-index: 5;
  height: 144px;
  width: 120px;

  padding: 8px 14px;
  overflow-y: auto;
  border-radius: 6px;
  font-size: 12px;
  color: ${props => props.theme.colors.dark};
  background: ${props => props.theme.colors.selectBgColor};
  box-shadow: 0px 6.51852px 7.82222px rgba(0, 0, 0, 0.0314074);
  @media ${props => props.theme.device.tablet} {
    padding: 8px 18px;
    width: 132px;
    height: 162px;
  }
`;
export const SelectItem = styled.li`
  color: ${props => props.theme.colors.dark};
  &:not(:last-child) {
    margin-bottom: 4px;
  }
  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

export const WrapperCookingTime = styled.div`
  position: relative;

  cursor: pointer;
`;

export const IngredientsContainer = styled.div`
  display: block;
  width: 100%;
`;
export const TitleWrap = styled.div`
  display: flex;
  margin-bottom: 28px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media ${props => props.theme.device.tablet} {
    width: 610px;
  }
`;

export const FormSectionTitle = styled.h2`
  font-size: 24px;
  font-family: 'Poppins';
  color: ${props => props.theme.colors.textDark};
  letter-spacing: -0.02em;
`;

export const IngredienLenght = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 14px;
  width: 96px;
  height: 28px;
  border: 1px solid ${props => props.theme.colors.text};
  opacity: 30%;
  border-radius: 18px;
`;

export const ButtonClickIngredient = styled.button`
  display: flex;
  align-items: center;
  border: none;
  width: 14x;
  cursor: pointer;
  background-color: transparent;
  color: ${props => props.theme.colors.textDark};

  &:hover {
    color: ${props => props.theme.colors.accentCurrent};
  }
`;
export const AddIngredientButton = styled(AiOutlinePlus)`
  font-weight: 600;
  width: 14px;
`;
export const DeleteIngredientButton = styled(BsDashLg)`
  width: 14px;
  font-weight: 600;
`;
export const IngredientsCount = styled.span`
  font-size: 14px;
  color: ${props => props.theme.colors.profileModalCloseIcon};
  @media ${props => props.theme.device.tablet} {
    font-size: 16px;
  }
`;

export const AddRecipeButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.accentDark};

  clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%);

  border: none;
  color: ${props => props.theme.colors.textWhite};
  transition: all 250ms linear;
  width: 129px;
  height: 100px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.normal};
  z-index: 100;
  font-size: 10px;
  line-height: 15px;

  @media ${props => props.theme.device.tablet} {
    padding: 32px 12px;
    font-size: 14px;
    line-height: 21px;
    width: 161px;
    height: 100px;
  }

  @media ${props => props.theme.device.desktop} {
    padding: 50px 42px;
    font-size: 16px;
    line-height: 24px;
  }

  :hover,
  :focus {
    background-color: ${props => props.theme.colors.accent};

    @media ${props => props.theme.device.mobile} {
      font-size: 14px;
      line-height: 21px;
    }

    @media ${props => props.theme.device.tablet} {
      font-size: 16px;
      line-height: 24px;
    }
    @media ${props => props.theme.device.desktop} {
      font-size: 16px;
      line-height: 24px;
    }
  }
`;
export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(192, 192, 192, 0.5);
  z-index: 100;
  width: 100%;
  height: 100%;
`;
