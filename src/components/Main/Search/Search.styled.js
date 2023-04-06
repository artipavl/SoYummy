import styled from 'styled-components';
import { RoundedButton } from 'reusableComponents/Btn/Btn';

import { theme } from 'constants/theme';

export const SearchForm = styled.div`
  position: relative;
  border: 1px solid #f0f0f0;
  width: 295px;
  height: 60px;
  border-top-left-radius: 18px 18px;
  border-bottom-left-radius: 44px 44px;
  border-bottom-right-radius: 18px 18px;
  border-top-right-radius: 44px 44px;
  background-color: ${theme.colors.white};
  margin-top: 24px;

  @media ${theme.device.tablet} {
    width: 362px;
    height: 59px;
  }
  @media ${theme.device.desktop} {
    grid-area: 3 / 1 / 4 / 2;
    width: 510px;
    height: 62px;
  }
`;

export const SearchInput = styled.input`
  font-size: 12px;
  line-height: 18px;
  padding: 0 20px;
  outline: none;
  width: 100%;
  height: 100%;
  border: none;

  background-color: transparent;
  color: ${theme.colors.textDark};
  @media ${theme.device.tablet} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const BtnSearchBox = styled.div`
  position: absolute;
  top: -31px;
  right: -1px;
  width: 113px;
  height: 60px;
  font-size: 14px;
  line-height: 1.5;
  /* display: flex;
  align-items: center;
  justify-content: flex-end; */
  @media ${theme.device.tablet} {
    width: 161px;
    height: 57px;
    font-size: 16px;
    line-height: 24px;
  }
  @media ${theme.device.desktop} {
    width: 161px;
    height: 71px;
  }
`;

export const BtnSearch = styled(RoundedButton)``;
