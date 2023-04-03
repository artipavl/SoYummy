import styled from 'styled-components';

export const CardItem = styled.li`
  list-style-type: none;
  display: flex;
  width: auto;
  height: 152px;
  background: #FFFFFF;
  border-radius: 8px;
  margin-bottom: 18px;
  padding: 14px;

  :last-child{
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
`

export const ImgBox = styled.div`
  display: block;
  height: 100%;
  min-width: 152px;
  background: url(${props => props.imgUrl});
  border-radius: 8px;
  overflow: hidden;

  @media ${props => props.theme.device.tablet} {
    display: block;
    min-width: 288px;
  }
  @media ${props => props.theme.device.desktop} {
    min-width: 404px;
  }
`

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`

export const Info = styled.div`
  position: relative;
  width: 100%;
`
export const Title = styled.h3`
  position: absolute;
  top: 0;
  left: 14px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -0.24px;
  color: #3E4462;
  padding-right: 24px;

  @media ${props => props.theme.device.tablet} {
    left: 24px;
    font-size: 24px;
    line-height: 24px;
    padding-right: 38px;
  }
  @media ${props => props.theme.device.desktop} {
    left: 54px;
    padding-right: 44px;
  }
`

export const Description = styled.p`
  position: absolute;
  top: 34px;
  left: 14px;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 125%;
  letter-spacing: -0.02em;
  color: #23262A;

  @media ${props => props.theme.device.tablet} {
    top: 52px;
    left: 24px;
    font-size: 14px;
    line-height: 129%;
  }
  @media ${props => props.theme.device.desktop} {
    top: 64px;
    left: 54px;
    font-size: 18px;
    line-height: 133%;
  }
`

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
  color: #3E4462;

  @media ${props => props.theme.device.tablet} {
    left: 24px;
    font-size: 14px;
    line-height: 143%;
  }
  @media ${props => props.theme.device.desktop} {
    left: 54px;
  }
`