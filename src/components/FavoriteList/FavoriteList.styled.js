import styled from 'styled-components';

export const List = styled.div`
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
`
export const FavoriteListText = styled.h3`
  font-size: 20px;

  @media ${props => props.theme.device.tablet} {
    font-size: 24px;
  }
`
export const ButtonDelete = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  background: #ebf3d4;
  color: #22252a;
  font-size: 14px;
  text-align: center;

  :hover,
  :focus {
    background: #8baa36;
    color: #fafafa;
    scale: 1.1;
  }

  @media ${props => props.theme.device.tablet} {
    font-size: 22px;
    width: 38px;
    height: 38px;
  }
  @media ${props => props.theme.device.desktop} {
    font-size: 24px;
    width: 44px;
    height: 44px;
  }
`;
  
export const ButtonRecipe = styled.button`
  // @media ${props => props.theme.device.mobile} {
    position: absolute;
    bottom: -8px;
    right: 0;
  // }

  @media ${props => props.theme.device.tablet} {
    bottom: -20px;
  }
  @media ${props => props.theme.device.desktop} {
    font-size: 24px;
    width: 44px;
    height: 44px;
  }
`