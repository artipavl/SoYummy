import styled from 'styled-components';

import arrowDown from '../../images/icons/arrow-down.svg';

export const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;

  position: relative;

  margin-top: 24px;
  margin-bottom: 40px;
`;

export const SelectorText = styled.p`
  font-size: 12px;
  line-height: 1.33;

  font-weight: ${props => props.theme.fontWeights.medium};

  color: ${props => props.theme.colors.textTitle};
`;

export const TypeSelector = styled.select`
  height: 34px;
  width: 146px;

  padding-left: 14px;

  border: none;
  border-radius: 6px;

  color: rgba(0, 0, 0, 0.5);
  background: url(${arrowDown}) no-repeat right 19px center
    ${props => props.theme.colors.whiteMuted};

  appearance: none;
`;

export const SelectorOption = styled.option``;
