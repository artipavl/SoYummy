import styled from 'styled-components';

export const IngredientsSection = styled.section`
  padding-top: 32px;
  padding-bottom: 25px;
`;

export const IngredientsHeader = styled.div`
  padding: 12px 14px;
  margin-bottom: 24px;

  background: ${props => props.theme.colors.modes.white.accent};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
`;
export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TitleText = styled.p`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 10px;
  line-height: 1.5;
  letter-spacing: 0.03em;

  color: ${props => props.theme.colors.textWhite};
`;

export const MarginText = styled(TitleText)`
  margin-right: 18px;
`;

export const IngredientItem = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 29px;

  display: flex;
  justify-content: space-between;

  background: ${props => props.theme.colors.accentMuted};
  border-radius: 8px;

  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const IngredientPlaceholder = styled.svg`
  width: 65px;
  height: 65px;

  margin-right: 8px;
`;

export const IngredientName = styled.p`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.24px;

  color: ${props => props.theme.colors.textDark};
`;

export const IngredientNumber = styled.p`
  margin-right: 28px;
  padding: 4px;

  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 10px;
  text-align: right;

  color: ${props => props.theme.colors.textWhite};

  background-color: ${props => props.theme.colors.modes.white.accent};
  border-radius: 4px;
`;
