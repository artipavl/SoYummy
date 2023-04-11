import styled from 'styled-components';
import notFoundMobile from '../../images/notFound/notFoundMobile.svg';
import notFoundTablet from '../../images/notFound/notFoundTablet.svg';
import notFoundDesktop from '../../images/notFound/notFoundDesktop.svg';

export const Image = styled.div`
  display: block;
  width: 259px;
  height: 170px;
  margin-top: 164px;
  margin-left: auto;
  margin-right: auto;
  background-image: ${props => props.theme.colors.white};
  background-image: url('${notFoundMobile}');
  background-repeat: no-repeat;
  background-position: center center;
  overflow: hidden;

  @media ${props => props.theme.device.tablet} {
    width: 498px;
    height: 327px;
    background-image: url('${notFoundTablet}');
  }
  @media ${props => props.theme.device.desktop} {
    width: 498px;
    height: 331px;
    background-image: url('${notFoundDesktop}');
  }
`;

export const Sorry = styled.h2`
  display: block;
  margin-top: 14px;
  text-align: center;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 111%;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${props => props.theme.colors.textDark};

  @media ${props => props.theme.device.tablet} {
    font-size: 24px;
    line-height: 100%;
    margin-top: 32px;
  }
`;

export const Text = styled.p`
  display: block;
  width: 206px;
  margin-top: 8px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 129%;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  color: ${props => props.theme.colors.textDark};
  opacity: 0.5;

  @media ${props => props.theme.device.tablet} {
    width: 100%;
    font-size: 18px;
    line-height: 133%;
    margin-top: 14px;
  }
`;