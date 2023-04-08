import styled from 'styled-components';

export const Box = styled.div`
  display: block;
  padding: 0 50px;
  text-align: center;
  height: 51px;
  background: ${props => props.theme.colors.modes.dark.text};
  box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);
  border-radius: 26px;
  font-size: 18px;
  margin:  0 100px;
  line-height: 50px;

  @media ${props => props.theme.device.tablet} {
    height: 55px;
    margin: 0 200px;
  }
  @media ${props => props.theme.device.desktop} {
    margin: 0 400px;
  }
`;
