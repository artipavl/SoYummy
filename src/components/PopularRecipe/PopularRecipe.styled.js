import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const LoaderDiv = styled.div`
  width: 100%;
  padding-top: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerPopularRecipe = styled.div`
  @media ${props => props.theme.device.desktop} {
    width: 320px;
  }
`;

export const TitlePopularRecipe = styled.h3`
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.24px;
  color: ${props => props.theme.colors.recipesFonts};
`;

export const StyledNavLink = styled(NavLink)`
  display: block;
`;

export const ItemList = styled.ul`
  padding-top: 8px;
  @media ${props => props.theme.device.tablet} {
    display: flex;
    column-gap: 32px;
  }
  @media ${props => props.theme.device.desktop} {
    display: block;
  }
  @media ${props => props.theme.device.tablet} and (max-width: 1439px) {
    li:not(:nth-child(-n + 2)) {
      display: none;
    }
  }
`;

export const ItemBox = styled.div`
  display: flex;
  padding-top: 24px;
  padding-bottom: 13px;
  border-bottom: 1px solid ${props => props.theme.colors.popularRecipesItemBox}; 
  column-gap: 12px;
  width: 100%;

  @media ${props => props.theme.device.tablet} and (max-width: 1439px) {
    padding-top: 32px;
  }
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Preview = styled.img`
  height: 85px;
  width: 104px;
  border-radius: 8px;
  @media ${props => props.theme.device.tablet} {
    width: 102px;
  }
`;

export const TitleRecipe = styled.p`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
  color: ${props => props.theme.colors.recipesFonts};
`;

export const Description = styled.p`
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: -0.24px;
  color:  ${props => props.theme.colors.recipesFonts};

  // Обрізає лишній текст
  max-height: calc(3 * var(--line-height));
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`;

export const ErrorText = styled(TitleRecipe)`
  padding-top: 50px;
`;