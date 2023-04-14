import { Container } from 'reusableComponents/Container/Container.styled';

const { default: styled } = require('styled-components');

export const InstructionsSection = styled.section`
  padding-top: 25px;
  padding-bottom: 100px;
  @media ${props => props.theme.device.tablet} {
    padding-top: 48px;
    padding-bottom: 200px;
  }
  @media ${props => props.theme.device.desktop} {
    padding-top: 50px;
  }
`;

export const DesktopFlex = styled(Container)`
  @media ${props => props.theme.device.desktop} {
    display: flex;
    justify-content: space-between;
  }
`;
export const ContentWrapper = styled.div`
  @media ${props => props.theme.device.mobile} {
    margin-bottom: 40px;
  }
  @media ${props => props.theme.device.tablet} {
    margin-bottom: 50px;
  }
  @media ${props => props.theme.device.desktop} {
    margin-bottom: 0;
    margin-right: 50px;
  }
`;
export const InstructionsTitle = styled.h2`
  margin-bottom: 28px;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 24px;
  line-height: 1;

  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${props => props.theme.colors.recipesFonts};

  @media ${props => props.theme.device.tablet} {
    margin-bottom: 32px;
  }
`;

export const InstructionItem = styled.li`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 18px;

    @media ${props => props.theme.device.desktop} {
      margin-bottom: 20px;
    }
  }
`;
export const ItemNumber = styled.p`
  padding: 3px 9px;
  margin-right: 14px;

  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  background: #8baa36;
  border-radius: 100px;

  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InstructionText = styled.p`
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: 12px;
  line-height: 1.17;

  letter-spacing: -0.02em;

  /* color: rgba(0, 0, 0, 0.8); */
  color: ${props => props.theme.colors.recipesFonts};
  @media ${props => props.theme.device.tablet} {
    font-size: 14px;
  }
`;

export const RecipeImg = styled.img`
  width: 343px;
  height: 250px;

  @media ${props => props.theme.device.tablet} {
    width: 433px;
    height: 332px;
  }
  @media ${props => props.theme.device.desktop} {
    width: 433px;
    height: 332px;
    flex-shrink: 0;
  }
`;
