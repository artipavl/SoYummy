const { default: styled } = require('styled-components');

export const InstructionsSection = styled.section`
  padding-top: 25px;
  padding-bottom: 100px;
`;

export const InstructionsTitle = styled.h2`
  margin-bottom: 28px;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 24px;
  line-height: 1;

  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${props => props.theme.colors.modes.white.textDark};
`;

export const InstructionsList = styled.ol`
  @media ${props => props.theme.device.mobile} {
    margin-bottom: 40px;
  }
`;

export const InstructionItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;

export const InstructionText = styled.p`
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: 12px;
  line-height: 14px;

  letter-spacing: -0.02em;

  color: rgba(0, 0, 0, 0.8);
`;

export const RecipeImg = styled.img`
  width: 343px;
  height: 250px;
`;
