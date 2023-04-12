import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { ReactComponent as Facebook } from '../../images/icons/facebook-logo.svg';
import { ReactComponent as Twitter } from '../../images/icons/twitter-logo.svg';
import { ReactComponent as Youtube } from '../../images/icons/youtube-logo.svg';
import { ReactComponent as Instagram } from '../../images/icons/instagram-logo.svg';

//iconStyled
export const FacebookIconStyled = styled(Facebook)`
  width: 26px;
  path {
    fill: ${props => props.theme.colors.socialLinkIcons};
    transition: fill 250ms linear;
  }
  :hover path,
  :focus path {
    fill: ${props => props.theme.colors.socialLinkIconsHover};
  }
`;
export const TwitterIconStyled = styled(Twitter)`
  width: 26px;
  path {
    fill: ${props => props.theme.colors.socialLinkIcons};
    transition: fill 250ms linear;
  }
  :hover path,
  :focus path {
    fill: ${props => props.theme.colors.socialLinkIconsHover};
  }
`;

export const YoutubeIconStyled = styled(Youtube)`
  width: 26px;
  path {
    fill: ${props => props.theme.colors.socialLinkIcons};
    transition: fill 250ms linear;
  }
  :hover path,
  :focus path {
    fill: ${props => props.theme.colors.socialLinkIconsHover};
  }
`;

export const InstagramIconStyled = styled(Instagram)`
  width: 26px;
  path {
    fill: ${props => props.theme.colors.socialLinkIcons};
    transition: fill 250ms linear;
  }
  :hover path,
  :focus path {
    fill: ${props => props.theme.colors.socialLinkIconsHover};
  }
`;

export const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
`;

export const SocialLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:not(:first-child) {
    margin-left: 10px;
  }
`;
export const TitleSocial = styled.h3`
  font-size: 24px;
  margin-bottom: 42px;
  color: ${props => props.theme.colors.recipesFonts};
`;
