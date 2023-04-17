import styled from 'styled-components';
import arrowDown from '../../images/icons/arrow-down.svg';

export const Form = styled.form`
  margin-top: 50px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const SearchContainer = styled.div`
  position: relative;

  width: 295px;

  @media ${props => props.theme.device.tablet} {
    width: 362px;
  }

  @media ${props => props.theme.device.desktop} {
    width: 510px;
  }
`;

export const SearchValue = styled.input`
  width: 100%;
  height: 53px;

  padding: 0;
  padding-left: 32px;

  border: 1px solid #f0f0f0;
  border-radius: 24px 44px;

  font-size: 12px;
  line-height: 1.5;

  color: ${props => props.theme.colors.searchInputTextColor};

  @media ${props => props.theme.device.tablet} {
    width: 100%;
    height: 57px;

    padding-left: 38px;

    font-size: 14px;
  }

  @media ${props => props.theme.device.desktop} {
    width: 100%;
    height: 70px;

    padding-left: 48px;

    font-size: 16px;
  }
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  height: 100%;

  display: flex;
  align-items: center;

  background-color: ${props => props.theme.colors.accentCurrent};
  color: ${props => props.theme.colors.modes.dark.text};

  border-radius: 24px 44px;
  border: none;

  padding: 23px 52px;

  font-size: 14px;
  line-height: 1.5;

  &:hover {
    background-color: ${props => props.theme.colors.searchBtnHover};
    transition: all 250ms linear 0s;
    color: ${props => props.theme.colors.searchBtnText};
  }

  @media ${props => props.theme.device.tablet} {
    font-size: 16px;
  }
`;

export const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  position: relative;

  margin-top: 24px;
  margin-bottom: ${({ open }) => (open ? '0' : '90px')};

  @media ${props => props.theme.device.tablet} {
    margin-top: 28px;
    gap: 18px;
  }
`;

export const SelectorText = styled.p`
  font-size: 12px;
  line-height: 1.33;

  font-weight: ${props => props.theme.fontWeights.medium};

  color: ${props => props.theme.colors.textTitle};

  @media ${props => props.theme.device.tablet} {
    font-size: 14px;
    line-height: 1.28;
  }

  @media ${props => props.theme.device.desktop} {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
`;

export const SelectButton = styled.button`
  height: 34px;
  width: 146px;

  text-align: left;
  padding-left: 14px;

  border-radius: 6px;

  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  border: 1px solid rgba(250, 250, 250, 0.2);

  color: ${props => props.theme.colors.searchInputTextColor};

  background: url(${arrowDown}) right 15px center;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.colors.whiteMuted};
  background-size: 7px;

  @media ${props => props.theme.device.tablet} {
    font-size: 14px;

    background-size: 10px;
  }
`;

export const SelectCategories = styled.ul`
  position: absolute;
  left: 0;
  right: 0;

  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  background-color: inherit;

  @media ${props => props.theme.device.tablet} {
    font-size: 14px;
  }
`;

export const SelectCategoriesItem = styled.li`
  padding: 8px 16px;
  cursor: pointer;

  color: #fafafa;
  opacity: 0.8;

  background-color: ${props => props.theme.colors.selectCategoriesItemBgColor};

  &:not(:first-child) {
    border-radius: 0px 0px 6px 6px;
  }

  &:hover {
    color: ${props => props.theme.colors.selectCategoriesItemText};
    opacity: 1;
  }
`;
