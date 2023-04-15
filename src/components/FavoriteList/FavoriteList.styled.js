import styled from 'styled-components';

export const List = styled.div`
  position: relative;
  padding-top: 50px;
  padding-bottom: 40px;

  @media ${props => props.theme.device.tablet} {
    padding-top: 100px;
    padding-bottom: 50px;
  }
  @media ${props => props.theme.device.desktop} {
    padding-top: 100px;
    padding-bottom: 50px;
  }
`;
export const ListText = styled.h3`
  font-size: 20px;
  color: ${props => props.theme.colors.textTitle};

  @media ${props => props.theme.device.tablet} {
    font-size: 24px;
  }
`;

export const LoaderBox = styled.div`
  width: 100%;
  padding-top: 5vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
