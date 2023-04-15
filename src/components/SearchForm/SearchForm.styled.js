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

  color: ${props => props.theme.colors.textDark};

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
  margin-bottom: 40px;

  @media ${props => props.theme.device.tablet} {
    margin-top: 28px;
    gap: 18px;
  }

  @media ${props => props.theme.device.desktop} {
    /* gap: 14px; */
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

export const TypeSelector = styled.select`
  height: 34px;
  width: 146px;

  padding-left: 14px;

  border: none;
  border-radius: 6px;

  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.02em;

  color: rgba(0, 0, 0, 0.5);

  background: url(${arrowDown}) right 19px center;
  background-repeat: no-repeat;
  background-color: ${props => props.theme.colors.whiteMuted};
  background-size: 7px;

  appearance: none;

  @media ${props => props.theme.device.tablet} {
    font-size: 14px;

    background-size: 10px;
  }

  @media ${props => props.theme.device.desktop} {
  }
`;

export const SelectorOption = styled.option`
  &:checked {
    background-color: red;
    color: blue;
  }
`;
