import styled from 'styled-components';

export const Form = styled.form`
  width: 295px;

  margin: 0 auto;

  @media ${props => props.theme.device.tablet} {
  }

  @media ${props => props.theme.device.desktop} {
  }
`;

export const SearchValue = styled.input`
  border: 1px solid #f0f0f0;

  color: ${props => props.theme.colors.textDark};

  @media ${props => props.theme.device.tablet} {
  }

  @media ${props => props.theme.device.desktop} {
  }
`;

export const SearchBtn = styled.button`
  clip-path: inset(25% 0 25% 0 round 15% 35% 15% 30%);
  padding: 50px 42px;
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.modes.dark.text};
  border: none;

  @media ${props => props.theme.device.tablet} {
  }

  @media ${props => props.theme.device.desktop} {
  }
`;
