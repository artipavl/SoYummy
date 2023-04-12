import { Pagination } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BoxPagination = styled.div`
display: flex;
justify-content: center;
margin-top: 25px;
`

export const PaginationBtn = styled(Pagination)`
  && .Mui-selected {
    background: #8baa36;
  }
`;


export const Container = styled.div`
  position: relative;
  margin: auto;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 100px;

  min-height: 100vh;
  padding-top: 10rem;
  background-color: ${props => props.theme.accent};
  transition: all 1s ease;

  max-width: 375px;

  @media ${props => props.theme.device.tablet} {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 200px;
  }

  @media ${props => props.theme.device.desktop} {
    padding-left: 99px;
    padding-right: 99px;
    max-width: 1440px;
  }
`;


export const BoxTitle = styled.div`
  width: 100%;
`;

export const Title = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${props => props.theme.colors.textTitle};

  margin-bottom: 60px;

  @media ${props => props.theme.device.tablet} {
  }

  @media ${props => props.theme.device.desktop} {
    margin-bottom: 110px;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 32px;

  li:hover,
  :focus {
    transform: scale(1.05);
  }
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(8, 1fr);
  grid-column-gap: px;
  grid-row-gap: 28px;

  @media ${props => props.theme.device.tablet} {
    margin-top: 50px;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 32px;
    grid-row-gap: 32px;
  }

  @media ${props => props.theme.device.desktop} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 14px;
    grid-row-gap: 100px;
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
