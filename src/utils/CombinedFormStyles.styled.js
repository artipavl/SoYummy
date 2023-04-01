import styled from 'styled-components';

export const SignUpLogo = styled.img`
  @media ${props => props.theme.device.mobile} {
    padding-top: 87px;
    padding-left: 45px;
    padding-right: 45px;
  }
`;

export const Form = styled.form`
  @media ${props => props.theme.device.mobile} {
    background: ${props => props.theme.colors.accentDarkMuted};
    box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
    border-radius: 30px;

    position: absolute;
    width: 335px;
    left: 20px;
    top: 305px;

    display: flex;
    flex-direction: column;
  }

  @media ${props => props.theme.device.tablet} {
  }

  @media ${props => props.theme.device.desktop} {
  }
`;

export const FormTitle = styled.h1`
  @media ${props => props.theme.device.mobile} {
    margin-top: 32px;
    margin-bottom: 18px;
    margin-left: 28px;

    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: 24px;
    line-height: 1.17;
    letter-spacing: -0.02em;

    color: ${props => props.theme.colors.textWhite};
  }

  @media ${props => props.theme.device.tablet} {
  }

  @media ${props => props.theme.device.desktop} {
  }
`;

export const FormBtn = styled.button`
  @media ${props => props.theme.device.mobile} {
    padding: 14px;

    margin-left: 28px;
    margin-right: 28px;
    margin-top: 28px;
    margin-bottom: 40px;

    background: ${props => props.theme.colors.modes.white.accent};

    border-radius: 6px;

    font-size: 16px;
    line-height: 1.12;

    color: ${props => props.theme.colors.textWhite};
  }

  @media ${props => props.theme.device.tablet} {
  }

  @media ${props => props.theme.device.desktop} {
  }
`;
