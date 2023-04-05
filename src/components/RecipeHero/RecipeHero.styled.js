import styled from 'styled-components';
import bgMobile from '../../images/recipePage/recipepage-bg-mb-1x-min.png';
import bgMobileRetina from '../../images/recipePage/recipepage-bg-mb-2x-min.png';
import bgTablet from '../../images/recipePage/recipepage-bg-tablet-1x-min.png';
import bgTabletRetina from '../../images/recipePage/recipepage-bg-tablet-2x-min.png';
import bgDesktop from '../../images/recipePage/recipepage-bg-desk-1x-min.png';
import bgDesktopRetina from '../../images/recipePage/recipepage-bg-desk-2x-min.png';

export const HeroSection = styled.section`
  padding-top: 144px;
  padding-bottom: 90px;
  background-image: url('${bgMobile}');
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: cover;
  max-width: 1600px;
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

export const HeroTitle = styled.h1`
  margin-bottom: 18px;

  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.bold};
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.02em;
  text-align: center;
  color: ${props => props.theme.colors.accent};

  @media ${props => props.theme.device.tablet} {
    margin-bottom: 24px;
    font-size: 44px;
  }
`;

export const RecepyDescr = styled.p`
  max-width: 300px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 24px;

  font-style: normal;
  font-weight: ${props => props.theme.fontWeights.normal};
  font-size: 12px;
  line-height: 1.33;

  text-align: center;
  letter-spacing: -0.02em;

  color: ${props => props.theme.colors.accentDark};

  @media ${props => props.theme.device.tablet} {
    font-size: 18px;
    margin-bottom: 24px;
    max-width: 506px;
  }
  @media ${props => props.theme.device.desktop} {
    margin-bottom: 30px;
    max-width: 656px;
  }
`;

export const ButtonWrap = styled.div`
  text-align: center;
  margin-bottom: 42px;
  @media ${props => props.theme.device.tablet} {
    margin-bottom: 60px;
  }
  @media ${props => props.theme.device.tablet} {
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

  color: ${props => props.theme.colors.text};

  @media ${props => props.theme.device.tablet} {
    font-size: 14px;
  }
`;
