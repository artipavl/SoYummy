import styled from 'styled-components';

import { Form, Field, ErrorMessage } from 'formik';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsDashLg } from 'react-icons/bs';

export const Error = styled(ErrorMessage)`
  width: 100%;
  display: block;
  font-size: 12px;
  color: ${props => props.theme.colors.textError};
  margin: -20px 0 10px 0;
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
export const WrapperSelectInput = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin: 0 0 24px 0;
  border-bottom: 1px solid
    ${props => props.theme.colors.blackAndWhiteBrorderList};
  padding-bottom: 18px;
`;

export const SelectInput = styled(Field)`
  display: flex;
  justify-content: flex-end;
  border: none;
  font-size: 14px;
  max-height: 120px;
  overflow-y: auto;

  color: ${props => props.theme.colors.dark};
  opacity: 50%;

  @media ${props => props.theme.device.tablet} {
    font-size: 16px;
  }
`;

export const SelectDescription = styled.span`
  /* width: 100%; */
  color: ${props => props.theme.colors.dark};
  opacity: 50%;
  font-size: 14px;

  @media ${props => props.theme.device.tablet} {
    font-size: 16px;
  }
`;
export const SelectStyled = styled.select`
  max-height: 110px;
  overflow-y: auto;
  position: relative;
  background-color: transparent;
  font-family: inherit;
  appearance: none;

  line-height: 1.5;

  border: none;
  outline: none;
  padding-right: 25px;

  text-align: right;

  border-radius: 5px;

  font-size: 12px;

  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21" width="20" height="21"><path fill="green" d="M5.3 6.3L8 9l2.7-2.7c.4-.4 1-.4 1.4 0l.7.7c.4.4.4 1 0 1.4l-4 4c-.4.4-1 .4-1.4 0l-4-4c-.4-.4-.4-1 0-1.4l.7-.7c.4-.4 1-.4 1.4 0z"/></svg>')
    no-repeat;
  background-position: right 10px top 50%;
  background-size: 14px 14px;
  cursor: pointer;

  @media ${props => props.theme.device.tablet} {
    font-size: 14px;
  }
  option {
    position: absolute;
    top: 100%;
    left: 0;

    line-height: 30px;
  }
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
  border: 1px solid ${props => props.theme.colors.textDark};
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
