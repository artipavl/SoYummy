import styled from 'styled-components';

export const RecipeItem = styled.li`
  position: relative;

  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const RecipeImage = styled.img`
  border-radius: 8px;
`;

export const RecipeTitleContainer = styled.div`
  width: 307px;
  height: 52px;

  border-radius: 8px;

  background-color: ${props => props.theme.colors.white};

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const RecipeTitleName = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;

  padding-left: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
`;
