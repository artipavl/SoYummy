import styled from 'styled-components';

export const Title = styled.h2`
  position: relative;
  display: block;
  font-family: 'Poppins';
  color: ${props => props.theme.colors.textTitle};
  font-style: normal;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  font-size: 28px;
  line-height: 100%;
  padding-top: 74px;
  @media ${props => props.theme.device.tablet} {
    font-size: 32px;
    padding-top: 102px;
  }
  @media ${props => props.theme.device.desktop} {
    font-size: 44px;
    padding-top: 102px;
  }
`;
export const Green1 = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  left: 104px;
  top: 14px;
  background: ${props => props.theme.colors.modes.white.accent};
  border-radius: 3px;
  transform: rotate(-25deg);

  @media ${props => props.theme.device.tablet} {
    width: 14px;
    height: 14px;
    left: 187px;
    top: 23px;
  }

  @media ${props => props.theme.device.desktop} {
    left: 228px;
    top: 54px;
  }
`;

export const Green2 = styled.div`
  position: absolute;
  width: 8px;
  height: 8px;
  left: 333px;
  top: 46px;
  background: ${props => props.theme.colors.modes.white.accent};
  border-radius: 3px;
  transform: rotate(-25deg);

  @media ${props => props.theme.device.tablet} {
    width: 14px;
    height: 14px;
    left: 694px;
    top: 36px;
  }

  @media ${props => props.theme.device.desktop} {
    left: 1150px;
    top: 67px;
  }
`;
export const Black1 = styled.div`
  position: absolute;
  width: 6px;
  height: 6px;
  left: 231px;
  top: 79px;
  background: ${props => props.theme.colors.modes.dark.accentDark};
  border-radius: 3px;
  transform: rotate(-25deg);

  @media ${props => props.theme.device.tablet} {
    width: 12px;
    height: 12px;
    left: 405px;
    top: 93px;
  }

  @media ${props => props.theme.device.desktop} {
    left: 707px;
    top: 137px;
  }
`;
