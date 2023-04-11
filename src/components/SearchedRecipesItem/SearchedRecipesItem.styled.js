import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RecipeItem = styled.li`
  position: relative;
  cursor: pointer;
  &:hover,
  :focus {
    transform: scale(1.05);
    transition: all 250ms linear 0s;
  }
  @media (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }

  @media ${props => props.theme.device.tablet} and (max-width: 1439px) {
    &:nth-child(odd) {
      margin-right: 30px;
    }

    :not(:nth-last-child(-n + 2)) {
      margin-bottom: 32px;
    }
  }

  @media ${props => props.theme.device.desktop} {
  }
  &:hover,
  &:focus {
    h2 {
      overflow: ${props => props.animation && 'visible'};
      animation: ${props => props.animation && 'ticker 9s linear infinite'};
      position: ${props => props.animation && 'absolute'};
      left: ${props => props.animation && '307px'};
      @keyframes ticker {
        0% {
          transform: translate(0, 0);
        }
        100% {
          transform: translate(-200%, 0);
        }
      }
    }
  }
`;

export const RecipeLink = styled(Link)``;

export const RecipeWrapper = styled.div``;

export const RecipeImage = styled.img`
  width: 343px;
  height: 323px;

  border-radius: 8px;

  @media ${props => props.theme.device.tablet} {
    width: 336px;
  }

  @media ${props => props.theme.device.tablet} {
    width: 300px;
  }
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
  overflow: hidden;

  @media ${props => props.theme.device.tablet} {
    width: 300px;
  }

  @media ${props => props.theme.device.tablet} {
    width: 268px;
  }
`;

export const RecipeTitleName = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 16px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-right: 16px;
`;
