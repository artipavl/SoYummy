import styled from 'styled-components';
import bgMobile from 'images/recipepage/recipepageMb1.webp';
import bgMobileRetina from 'images/recipepage/recipepage-bg-mb-2x-min.webp';
import bgTablet from 'images/recipepage/recipepage-bg-tablet-1x-min.webp';
import bgTabletRetina from 'images/recipepage/recipepage-bg-tablet-2x-min.webp';
import bgDesktop from 'images/recipepage/recipepage-bg-desk-1x-min.webp';
import bgDesktopRetina from 'images/recipepage/recipepage-bg-desk-2x-min.webp';

export const HeroSection = styled.section`
  padding-top: 144px;
  padding-bottom: 90px;
  background-image: url('${bgMobile}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: auto;

  @media ${props => props.theme.retinaBackgroundImage} {
    background-image: url('${bgMobileRetina}');
  }
  @media ${props => props.theme.device.mobile} {
  }

  @media ${props => props.theme.device.tablet} {
    background-image: url('${bgTablet}');
    padding-top: 136px;
    padding-bottom: 32px;
    @media ${props => props.theme.retinaBackgroundImage} {
      background-image: url('${bgTabletRetina}');
    }
  }
  @media ${props => props.theme.device.desktop} {
    background-image: url('${bgDesktop}');
    padding-top: 164px;
    padding-bottom: 32px;
    @media ${props => props.theme.retinaBackgroundImage} {
      background-image: url('${bgDesktopRetina}');
    }
  }
`;

export const TextWrap = styled.div`
  max-width: 303px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: ${props => (props.addMargin ? '101px' : '24px')};
  @media ${props => props.theme.device.tablet} {
    margin-bottom: ${props => (props.addMargin ? '143px' : '24px')};
    max-width: 506px;
  }
  @media ${props => props.theme.device.desktop} {
    margin-bottom: ${props => (props.addMargin ? '137px' : '30px')};
    max-width: 656px;
  }
`;

export const HeroTitle = styled.h1`
  margin-bottom: 18px;

  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  text-align: center;
  color: #8baa36;
  @media ${props => props.theme.device.tablet} {
    margin-bottom: 24px;
    font-size: 44px;
  }
`;

export const RecepyDescr = styled.p`
  margin-right: auto;
  margin-left: auto;

  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: 12px;
  line-height: 1.33;

  text-align: center;
  letter-spacing: -0.02em;

  color: #22252a;

  @media ${props => props.theme.device.tablet} {
    font-size: 18px;
  }
`;

export const FavoriteBtn = styled.button`
  padding: 10px 18px;
  background-color: transparent;
  color: #22252a;
  border-radius: 24px 44px;
  border: 1px solid #8baa36;
  transition: all 250ms linear;

  font-size: 10px;
  line-height: 1.5;

  @media ${props => props.theme.device.tablet} {
    padding: 18px 44px;
    font-size: 16px;
  }

  &:hover,
  &:focus {
    background-color: #8baa36;
    border: 1px solid #8baa36;
  }

  &:disabled {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;

export const ButtonWrap = styled.div`
  text-align: center;
  margin-bottom: 42px;
  @media ${props => props.theme.device.tablet} {
    margin-bottom: 60px;
  }
  @media ${props => props.theme.device.desktop} {
    margin-bottom: 48px;
  }
`;

export const IconClocks = styled.svg`
  display: inline-block;
  width: 14px;
  height: 14px;
  stroke-width: 0;
  stroke: currentColor;
  fill: white;

  @media ${props => props.theme.device.tablet} {
    width: 20px;
  }
`;

export const RecipeTimeWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const RecipeTime = styled.p`
  margin-left: 4px;

  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.medium};
  font-size: 10px;
  line-height: 1.4;
  letter-spacing: -0.24px;

  color: #23262a;
  @media ${props => props.theme.device.tablet} {
    font-size: 14px;
  }
`;
