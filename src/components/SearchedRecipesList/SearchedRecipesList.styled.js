import styled from 'styled-components';

import recipeNotFoundImgTabletDesktop from '../../images/bg/recipe-not-found-tablet-desktop.webp';
import recipeNotFoundImgTabletDesktopRetina from '../../images/bg/recipe-not-found-tablet-desktop-2x.webp';
import recipeNotFoundImgMobile from '../../images/bg/recipe-not-found-mobile.webp';
import recipeNotFoundImgMobileRetina from '../../images/bg/recipe-not-found-mobile-2x.webp';

import GetDeviceImages from 'utils/GetDeviceImages';

export const RecipesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${() => {
    return GetDeviceImages(208, 133, recipeNotFoundImgMobile);
  }}

  @media ${props => props.theme.retinaBackgroundImage} {
    background-image: url('${recipeNotFoundImgMobileRetina}');
  }

  @media ${props => props.theme.device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;

    ${() => {
      return GetDeviceImages(350, 225, recipeNotFoundImgTabletDesktop);
    }}
  }

  @media ${props => props.theme.retinaBackgroundImage} {
    background-image: url('${recipeNotFoundImgTabletDesktopRetina}');
  }

  @media ${props => props.theme.device.desktop} {
    gap: 14px;

    padding-left: 100px;
    padding-right: 100px;
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
