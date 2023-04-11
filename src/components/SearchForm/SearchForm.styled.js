import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.device.tablet} {
  }

  @media ${props => props.theme.device.desktop} {
  }
`;

export const SearchContainer = styled.div`
  position: relative;

  width: 295px;

  @media ${props => props.theme.device.tablet} {
    width: 362px;
  }

  @media ${props => props.theme.device.desktop} {
    width: 510px;
  }
`;

export const SearchValue = styled.input`
  width: 100%;
  height: 53px;

  padding: 0;
  padding-left: 32px;

  border: 1px solid #f0f0f0;
  border-radius: 24px 44px;

  font-size: 12px;
  line-height: 1.5;

  color: ${props => props.theme.colors.textDark};

  @media ${props => props.theme.device.tablet} {
    width: 100%;
    height: 57px;

    padding-left: 38px;

    font-size: 14px;
  }

  @media ${props => props.theme.device.desktop} {
    width: 100%;
    height: 70px;

    padding-left: 48px;

    font-size: 16px;
  }
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  height: 100%;

  display: flex;
  align-items: center;

  background-color: ${props => props.theme.colors.accentCurrent};
  color: ${props => props.theme.colors.modes.dark.text};

  border-radius: 24px 44px;
  border: none;

  padding: 23px 52px;

  font-size: 14px;
  line-height: 1.5;

  &:hover {
    background-color: ${props => props.theme.colors.accentDark};
    transition: all 250ms linear 0s;
  }

  @media ${props => props.theme.device.tablet} {
    font-size: 16px;
  }

  @media ${props => props.theme.device.desktop} {
  }
`;
