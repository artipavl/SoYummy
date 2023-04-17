import styled from 'styled-components';

import formStyles from 'utils/formStyles';

export const FormValue = styled.input`
  background-color: transparent;


  color: ${props => props.theme.colors.textWhite};

  border: 1px solid ${props => props.theme.colors.textWhite};
  border-radius: 6px;
  padding-left: 40px;

  height: 45px;
  width: 279px;

  margin-left: 28px;
  margin-right: 28px;

  opacity: 0.8;

  border-color: ${({ error, warn, touched }) => {
    if (warn || !touched) {
      return 'inherit';
    }

    if (error) {
      return formStyles.message.error.color;
    }

    return formStyles.message.success.color;
  }};

  &:hover {
    opacity: 1;
  }

  @media ${props => props.theme.device.tablet} {
    height: 59px;
    width: 100%;

    padding-left: 50px;

    font-size: 18px;
    line-height: 1.5;
  }

  @media ${props => props.theme.device.desktop} {
  }
`;
