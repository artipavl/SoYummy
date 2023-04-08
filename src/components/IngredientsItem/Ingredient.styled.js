import styled from 'styled-components';

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IngredientImg = styled.img`
  width: 57px;
  height: 57px;
  margin-right: 12px;

  @media ${props => props.theme.device.tablet} {
    width: 112px;
    height: 112px;
    margin-right: 40px;
  }
  @media ${props => props.theme.device.desktop} {
    width: 128px;
    height: 128px;
    margin-right: 66px;
  }
`;

export const IngredientPlaceholder = styled.svg`
  width: 57px;
  height: 57px;
  margin-right: 12px;

  @media ${props => props.theme.device.tablet} {
    width: 112px;
    height: 112px;
    margin-right: 40px;
  }
  @media ${props => props.theme.device.desktop} {
    width: 128px;
    height: 128px;
    margin-right: 66px;
  }
`;

export const IngredientName = styled.p`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.24px;

  color: ${props => props.theme.colors.textDark};

  @media ${props => props.theme.device.tablet} {
    font-size: 24px;
  }
`;

export const IngredientNumber = styled.p`
  margin-right: 28px;
  padding: 8px;
  min-width: 68px;

  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 10px;
  text-align: right;
  text-align: center;

  color: ${props => props.theme.colors.textWhite};

  background-color: ${props => props.theme.colors.modes.white.accent};
  border-radius: 4px;
  @media ${props => props.theme.device.tablet} {
    font-size: 18px;
    margin-right: 78px;
  }
  @media ${props => props.theme.device.desktop} {
    margin-right: 151px;
  }
`;
