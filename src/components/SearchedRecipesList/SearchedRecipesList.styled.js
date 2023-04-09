import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { selectStatus, selectResults } from 'redux/selectors';

import recipeNotFoundImgDesktop from '../../images/bg/recipe-not-found-desktop.webp';
import recipeNotFoundImgDesktopRetina from '../../images/bg/recipe-not-found-desktop-2x.webp';
import recipeNotFoundImgTablet from '../../images/bg/recipe-not-found-tablet.webp';
import recipeNotFoundImgTabletRetina from '../../images/bg/recipe-not-found-tablet-2x.webp';
import recipeNotFoundImgMobile from '../../images/bg/recipe-not-found-mobile.webp';
import recipeNotFoundImgMobileRetina from '../../images/bg/recipe-not-found-mobile-2x.webp';

export const RecipesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: ${() => {
    const results = useSelector(selectResults);
    const { isResolved } = useSelector(selectStatus);

    const noRecipeFound = isResolved && results.length === 0;

    if (noRecipeFound) {
      return `
          background-image: none;

          &::before {
            content: '';
            width: 208px;
            height: 133px;
            background-image: url(${recipeNotFoundImgMobile});
          `;
    }
  }};

  @media ${props => props.theme.retinaBackgroundImage} {
    background-image: url('${recipeNotFoundImgMobileRetina}');
  }

  @media ${props => props.theme.device.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 32px;
  }

  @media ${props => props.theme.device.desktop} {
    gap: 14px;

    padding-left: 100px;
    padding-right: 100px;
  }
`;
