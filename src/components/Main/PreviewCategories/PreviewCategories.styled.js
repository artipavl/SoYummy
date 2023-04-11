import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 375px;
  margin-top: 147px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${props => props.theme.device.tablet} {
    max-width: 768px;
    margin-top: 202px;
  }

  @media ${props => props.theme.device.desktop} {
    max-width: 1440px;
    margin-top: 235px;
  }
`;

export const Box = styled.div`
  position: relative;
  height: 445px;

  @media ${props => props.theme.device.tablet} {
    height: 485px;
  }

  @media ${props => props.theme.device.desktop} {
    height: 505px;
  }
`;

export const Title = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: #001833;

  margin-bottom: 32px;
`;

export const List = styled.ul`
  list-style: none;

  li:hover,
  :focus {
    transform: scale(1.05);
  }

  @media (max-width: 767px) {
    li:not(:first-child) {
      display: none;
    }
  }
  @media ${props => props.theme.device.tablet} and (max-width: 1439px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 0px;
    li:not(:nth-child(-n + 2)) {
      display: none;
    }
  }

  @media ${props => props.theme.device.desktop} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 14px;
    grid-row-gap: 0px;
    li:not(:nth-child(-n + 4)) {
      display: none;
    }
  }
`;

export const CardLink = styled(NavLink)``;

export const ImgBox = styled.div`
  position: relative;

  &:hover,
  &:focus {
    p {
      overflow: ${props => (props.animation ? 'visible' : 'hidden')};
      animation: ${props =>
        props.animation ? 'ticker 9s linear infinite' : ''};
      position: ${props => (props.animation ? 'absolute' : '')};
      left: ${props => (props.animation ? '307px' : '')};
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

export const Card = styled.img`
  width: 343px;
  height: 323px;
  border-radius: 8px;
  @media ${props => props.theme.device.tablet} {
    width: 336px;
    height: 323px;
  }
  @media ${props => props.theme.device.desktop} {
    width: 300px;
    height: 323px;
  }
`;

export const TitleBox = styled.div`
  position: absolute;
  width: 307px;
  height: 52px;
  left: 18px;
  top: 245px;

  background: ${props => props.theme.colors.white};
  border-radius: 8px;

  @media ${props => props.theme.device.tablet} {
    width: 300px;
  }

  @media ${props => props.theme.device.desktop} {
    width: 268px;
  }
  overflow: hidden;
`;

export const TitleCard = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.24px;

  color: ${props => props.theme.colors.textDark};
  padding-top: 16px;
  padding-left: 16px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SeeAll = styled(NavLink)`
  position: absolute;
  right: 0;
  margin-top: 24px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;
  gap: 8px;

  width: 94px;
  height: 38px;

  background: #8aa936;
  border-radius: 6px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;

  color: ${props => props.theme.colors.textWhite};

  @media ${props => props.theme.device.tablet} {
    margin-top: 50px;
  }

  background-color: ${props =>
    ({
      normal: props => props.theme.colors.accent,
      dark: props => props.theme.colors.dark,
    }[props.variant])};

  :hover,
  :focus {
    background-color: ${props =>
      ({
        normal: props => props.theme.colors.dark,
        dark: props => props.theme.colors.accent,
      }[props.variant])};
  }
`;

export const ButtonBox = styled.div`
  width: 239px;
`;
