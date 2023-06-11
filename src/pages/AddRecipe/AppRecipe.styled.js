import styled from 'styled-components';

export const Page = styled.section`
  width: 320px;
  padding: 62px 16px 100px 16px;

  margin: 0 auto;

  @media ${props => props.theme.device.mobile} {
    width: ${props => props.theme.size.mobile};
  }
  @media ${props => props.theme.device.tablet} {
    width: ${props => props.theme.size.tablet};
    padding: 62px 32px 200px 32px;
  }

  @media ${props => props.theme.device.desktop} {
    padding: 62px 100px 200px 100px;

    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 1240px;
    padding-left: 0px;
    padding-right: 0px;
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
    margin-bottom: 102px;
    padding-top: 100px;
  }
`;
