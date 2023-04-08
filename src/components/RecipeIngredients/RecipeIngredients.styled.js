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
