import styled from 'styled-components';

import recipeNotFoundImgTabletDesktop from '../../images/bg/recipe-not-found-tablet-desktop.webp';
import recipeNotFoundImgTabletDesktopRetina from '../../images/bg/recipe-not-found-tablet-desktop-2x.webp';
import recipeNotFoundImgMobile from '../../images/bg/recipe-not-found-mobile.webp';
import recipeNotFoundImgMobileRetina from '../../images/bg/recipe-not-found-mobile-2x.webp';

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 100px;
`;

export const RecipesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
  z-index: 99;

  @media ${props => props.theme.device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }

  @media ${props => props.theme.device.desktop} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    gap: 14px;
  }
`;

export const RecipeNotFoundImage = styled.div`
  background-image: url(${recipeNotFoundImgMobile});
  width: 208px;
  height: 133px;

  background-size: cover;

  margin: 0 auto;

  @media ${props => props.theme.retinaBackgroundImage} {
    background-image: url(${recipeNotFoundImgMobileRetina});
  }

  @media ${props => props.theme.device.tablet} {
    background-image: url(${recipeNotFoundImgTabletDesktop});
    width: 350px;
    height: 225px;

    @media ${props => props.theme.retinaBackgroundImage} {
      background-image: url(${recipeNotFoundImgTabletDesktopRetina});
    }
  }
`;

export const RecipeNotFoundText = styled.p`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.02em;

  text-align: center;

  margin-top: 24px;
  margin-bottom: 100px;

  color: ${props => props.theme.colors.dark};
  opacity: 0.5;

  @media ${props => props.theme.device.tablet} {
    font-size: 24px;

    margin-top: 32px;
    margin-bottom: 200px;
  }
`;
