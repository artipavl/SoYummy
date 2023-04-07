import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  margin-top: 50px;
  margin-left: 40px;
  margin-right: 40px;

  @media ${props => props.theme.device.tablet} {
  }

  @media ${props => props.theme.device.desktop} {
  }
`;

export const SearchValue = styled.input`
  width: 100%;
  height: 53px;

  padding: 0;

  border: 1px solid #f0f0f0;
  border-radius: 24px 44px;

  font-size: 12px;
  line-height: 1.5;

  color: ${props => props.theme.colors.textDark};

  @media ${props => props.theme.device.tablet} {
    width: 362px;
  }

  @media ${props => props.theme.device.desktop} {
  }
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0px;

  height: 100%;

  display: flex;
  align-items: center;

  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.modes.dark.text};

  border-radius: 24px 44px;
  border: none;

  padding: 23px 52px;

  font-size: 14px;
  line-height: 1.5;

  /* transition: all 250ms linear 0s; */

  @media ${props => props.theme.device.tablet} {
  }

  @media ${props => props.theme.device.desktop} {
  }
`;
