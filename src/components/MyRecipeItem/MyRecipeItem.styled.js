import styled from 'styled-components';
import photo from '../../images/icons/photo-icon.svg';

export const CardItem = styled.li`
  list-style-type: none;
  display: flex;
  width: auto;
  height: 152px;
  background: ${props => props.theme.colors.white};
  border-radius: 8px;
  margin-bottom: 18px;
  padding: 14px;

  :last-child {
    margin-bottom: 0;
  }

  @media ${props => props.theme.device.tablet} {
    height: 288px;
    margin-bottom: 40px;
    padding: 28px;
  }
  @media ${props => props.theme.device.desktop} {
    height: 404px;
    margin-bottom: 50px;
    padding: 40px;
  }
`;

export const ImgBox = styled.div`
  display: block;
  height: 100%;
  min-width: 124px;
  background-color: ${props => props.theme.colors.whiteMuted};
  background-image: url('${photo}');
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 8px;
  overflow: hidden;

  @media ${props => props.theme.device.tablet} {
    display: block;
    min-width: 228px;
  }
  @media ${props => props.theme.device.desktop} {
    min-width: 318px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const Info = styled.div`
  position: relative;
  width: 100%;

  padding-left: 14px;

  @media ${props => props.theme.device.tablet} {
    padding-left: 24px;
  }
  @media ${props => props.theme.device.desktop} {
    padding-left: 54px;
  }
`;

export const Title = styled.h3`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -0.24px;
  color: ${props => props.theme.colors.textDark};
  padding-right: 24px;
  margin-bottom: 14px;

  @media ${props => props.theme.device.tablet} {
    font-size: 24px;
    line-height: 24px;
    padding-right: 38px;
    margin-bottom: 28px;
  }

  @media ${props => props.theme.device.desktop} {
    padding-right: 44px;
    margin-bottom: 40px;
  }
`;

export const Description = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 125%;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.text};
  padding-right: 24px;

  @media ${props => props.theme.device.tablet} {
    font-size: 14px;
    line-height: 129%;
    padding-right: 38px;
  }
  @media ${props => props.theme.device.desktop} {
    font-size: 18px;
    line-height: 133%;
    padding-right: 44px;
  }
`;

export const Time = styled.div`
  position: absolute;
  left: 14px;
  bottom: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 140%;
  letter-spacing: -0.24px;
  color: ${props => props.theme.colors.textDark};

  @media ${props => props.theme.device.tablet} {
    left: 24px;
    font-size: 14px;
    line-height: 143%;
  }
  @media ${props => props.theme.device.desktop} {
    left: 54px;
  }
`;
export const ButtonDelete = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;

  :hover,
  :focus {
    scale: 1.1;
  }

  @media ${props => props.theme.device.tablet} {
    font-size: 22px;
    width: 38px;
    height: 38px;
  }
  @media ${props => props.theme.device.desktop} {
    font-size: 24px;
    width: 44px;
    height: 44px;
  }
`
export const ButtonRecipe = styled.button`
  position: absolute;
  bottom: -8px;
  right: 0;

  @media ${props => props.theme.device.tablet} {
    bottom: -20px;
  }
  @media ${props => props.theme.device.desktop} {
    bottom: -30px;
  }
`;