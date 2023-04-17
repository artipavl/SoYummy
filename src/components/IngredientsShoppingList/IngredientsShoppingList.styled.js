import styled from 'styled-components';
import { RiCloseLine } from 'react-icons/ri';

import NotFoundImgTabletDesktop from '../../images/bg/recipe-not-found-tablet-desktop.webp';
import NotFoundImgTabletDesktopRetina from '../../images/bg/recipe-not-found-tablet-desktop-2x.webp';
import NotFoundImgMobile from '../../images/bg/recipe-not-found-mobile.webp';
import NotFoundImgMobileRetina from '../../images/bg/recipe-not-found-mobile-2x.webp';

export const NotFoundImage = styled.div`
  margin-top: 100px;
  background-image: url(${NotFoundImgMobile});
  width: 208px;
  height: 133px;
  background-size: cover;
  margin: 0 auto;
  margin-top: 10%;
  @media ${props => props.theme.retinaBackgroundImage} {
    background-image: url(${NotFoundImgMobileRetina});
  }
  @media ${props => props.theme.device.tablet} {
    background-image: url(${NotFoundImgTabletDesktop});
    width: 350px;
    height: 225px;
    margin-top: 20%;
    @media ${props => props.theme.retinaBackgroundImage} {
      background-image: url(${NotFoundImgTabletDesktopRetina});
    }
  }
`;

export const NoShoppingListText = styled.p`
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

export const ShoppingListContainer = styled.div`
  padding: 50px 0 100px;
  @media ${props => props.theme.device.tablet} {
    padding: 72px 0 200px;
  }
  @media ${props => props.theme.device.desktop} {
    padding-bottom: 195px;
  }
`;

export const ShoppingListTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 12px;
  line-height: 1.5;
  border-radius: 8px;
  padding: 10px;
  background: ${props => props.theme.colors.modes.white.accent};
  @media ${props => props.theme.device.tablet} {
    margin: 0;
    padding: 20px;
    font-size: 18px;
    letter-spacing: 0.03em;
  }
  @media ${props => props.theme.device.desktop} {
    padding: 21px 40px;
  }
`;

export const ShoppingList = styled.ul`
  padding: 8px 8px 0;
  @media ${props => props.theme.device.tablet} {
    padding: 5px 0 0;
  }
`;

export const TitleName = styled.span`
  color: ${props => props.theme.colors.textWhite};
`;

export const RightBox = styled.div`
  display: flex;
  column-gap: 24px;
  @media ${props => props.theme.device.tablet} {
    column-gap: 78px;
  }
  @media ${props => props.theme.device.desktop} {
    column-gap: 142px;
  }
`;

export const ShoppingListItem = styled.li`
  display: flex;
  padding: 24px 17px 24px 0;

  border-bottom: 1px solid
    ${props => props.theme.colors.blackAndWhiteBrorderList};
  justify-content: space-between;
  @media ${props => props.theme.device.tablet} {
    padding: 45px 45px 42px 0px;
  }
  @media ${props => props.theme.device.desktop} {
    padding: 45px 68px 42px 40px;
  }
`;

export const ItemBoxLeft = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: flex-start;
  @media ${props => props.theme.device.tablet} {
    column-gap: 16px;
  }
`;

export const ItemBoxRight = styled(ItemBoxLeft)`
  column-gap: 42px;
  @media ${props => props.theme.device.tablet} {
    column-gap: 104px;
  }
  @media ${props => props.theme.device.desktop} {
    column-gap: 168px;
  }
`;

export const ImageProduct = styled.img`
  width: 48px;
  height: 48px;
  padding: 6px;
  border-radius: 8px;
  background: ${props => props.theme.colors.accentMutedRecipeIngredients};

  @media ${props => props.theme.device.tablet} {
    width: 93px;
    height: 97px;
    padding: 8px 6px;
  }
`;

export const TitleProduct = styled.p`
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 10px;
  line-height: 1.2;
  /* color: ${props => props.theme.colors.textWhite}; */
  color: ${props => props.theme.colors.textDark};

  @media ${props => props.theme.device.tablet} {
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const CloseIcon = styled(RiCloseLine)`
  color: ${props => props.theme.colors.profileModalCloseIcon};
  color: ${props => props.theme.colors.profileModalCloseIcon};
  font-size: 15px;
  @media ${props => props.theme.device.tablet} {
    font-size: 21px;
  }
`;

export const MeasureProduct = styled.p`
  background: ${props => props.theme.colors.modes.white.accent};
  border-radius: 4px;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 10px;
  line-height: 1.5;
  text-align: center;
  color: ${props => props.theme.colors.textWhite};
  padding: 4px;
  max-width: 70px;
  min-width: 37px;

  @media ${props => props.theme.device.tablet} {
    max-width: 140px;
    min-width: 68px;
    font-size: 18px;
  }

  @media ${props => props.theme.device.desktop} {
    max-width: 400px;
  }
`;

export const LoaderDiv = styled.div`
  width: 100%;
  padding-top: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
