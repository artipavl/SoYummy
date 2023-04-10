import styled from 'styled-components';

import arrowDown from '../../images/icons/arrow-down.svg';

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

  background: url(${arrowDown}) no-repeat right 19px center
    ${props => props.theme.colors.whiteMuted};
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
  /* border-radius: 0px 0px 6px 6px; */
  /* background-color: red; */
`;
