import styled from 'styled-components';

export const IngredientsSection = styled.section`
  padding-top: 32px;
  padding-bottom: 25px;

  @media ${props => props.theme.device.tablet} {
    padding-top: 50px;
    padding-bottom: 48px;
  }

  @media ${props => props.theme.device.desktop} {
    padding-bottom: 50px;
  }
`;

export const LoaderDiv = styled.div`
  width: 100%;
  padding-top: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IngredientsHeader = styled.div`
  padding: 12px 14px;
  margin-bottom: 24px;

  background: ${props => props.theme.colors.modes.white.accent};
  border-radius: 8px;
  display: flex;
  justify-content: space-between;

  @media ${props => props.theme.device.tablet} {
    padding: 21px 32px;
    margin-bottom: 32px;
  }

  @media ${props => props.theme.device.desktop} {
    padding: 21px 40px;
    margin-bottom: 50px;
  }
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

  @media ${props => props.theme.device.tablet} {
    font-size: 18px;
  }
`;

export const MarginText = styled(TitleText)`
  margin-right: 18px;
  @media ${props => props.theme.device.tablet} {
    margin-right: 38px;
  }
  @media ${props => props.theme.device.desktop} {
    margin-right: 109px;
  }
`;

export const IngredientItem = styled.li`
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 14px;
  padding-right: 29px;

  display: flex;
  justify-content: space-between;

  background: ${props => props.theme.colors.accentMutedRecipeIngredients};
  border-radius: 8px;

  @media ${props => props.theme.device.tablet} {
    padding-top: 33px;
    padding-bottom: 33px;
    padding-left: 40px;
    padding-right: 58px;
  }

  @media ${props => props.theme.device.desktop} {
    padding-top: 26px;
    padding-bottom: 26px;
    padding-left: 58px;
    padding-right: 70px;
  }

  &:not(:last-child) {
    margin-bottom: 16px;

    @media ${props => props.theme.device.tablet} {
      margin-bottom: 24px;
    }
  }
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
