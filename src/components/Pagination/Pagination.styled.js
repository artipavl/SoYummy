import styled from 'styled-components';

export const Box = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);
  height: 51px;
  border-radius: 25.5px;
  padding: 12px 0;

  @media ${props => props.theme.device.tablet} {
    height: 55px;
    border-radius: 27.5px;
    padding: 14px;
  }

  .pagination {
    display: flex;
    list-style: none;
    color: ${props => props.theme.colors.socialLinkIcons};
  }

  .pagination > li {
    width: 27px;
    height: 27px;
    border-radius: 50%;
    margin: 0 10px;
    font-size: 18px;
  }

  .pagination > .active > a {
    background-color: ${props => props.theme.colors.modes.white.accentGreen};
  }

  .pagination > li > a {
    width: 27px;
    display: flex;
    height: 27px;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .pagination > li > a:hover,
  .pagination > li > span:hover{
    background-color: ${props => props.theme.colors.modes.white.accentGreen};
  }
`;
