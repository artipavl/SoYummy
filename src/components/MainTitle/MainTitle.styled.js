import styled from 'styled-components';

export const Title = styled.h2`
  display: block;
  font-family: 'Poppins';
  color: #001833;
  font-style: normal;
  letter-spacing: -0.02em;
  font-feature-settings: 'liga' off;
  font-size: 28px;
  line-height: 100%;

  @media ${props => props.theme.device.tablet} {
    font-size: 32px;
  }
  @media ${props => props.theme.device.desktop} {
    font-size: 44px;
  }
`