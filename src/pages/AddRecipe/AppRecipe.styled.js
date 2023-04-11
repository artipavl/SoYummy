import styled from 'styled-components';

export const Page = styled.section`
  width: 320px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 100px;
  margin: 0 auto;

  @media ${props => props.theme.device.mobile} {
    width: ${props => props.theme.size.mobile};
  }
  @media ${props => props.theme.device.tablet} {
    width: ${props => props.theme.size.tablet};
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 200px;
    margin: 0;
  }

  @media ${props => props.theme.device.desktop} {
    padding-top: 62px;
    padding-left: 100px;
    padding-right: 100px;
    width: ${props => props.theme.size.desktop};
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media ${props => props.theme.device.desktop} {
    flex-direction: row;
  }
`;
export const FormContainer = styled.div`
  min-width: 320px;
  margin: 0 auto;
  @media ${props => props.theme.device.desktop} {
    margin: 0 120px 0 0;
  }
`;
export const SocialLinkWrap = styled.div`
  display: none;
  @media ${props => props.theme.device.desktop} {
    display: block;
  }
`;
