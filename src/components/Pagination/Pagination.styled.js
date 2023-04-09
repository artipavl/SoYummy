import styled from 'styled-components';

export const Box = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: inline-block;
  padding: 0;
  height: 51px;
  background: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.2);
  border-radius: 26px;
  font-size: 18px;
  margin: auto;
  line-height: 55px;

  @media ${props => props.theme.device.tablet} {
    height: 55px;
  }

  .pagination {
    display: flex;
    list-style: none;
    color: #656565;
  }

  .pagination > .active > a {
    background-color: ${props => props.theme.colors.modes.dark.text};
  }

  .pagination > li > a {
    width: 51px;
    height: 51px;
    text-align: center;
    outline: none;
    cursor: pointer;

    @media ${props => props.theme.device.tablet} {
      width: 55px;
      height: 55px;
    }
    @media ${props => props.theme.device.desktop} {
      width: 55px;
      height: 55px;
    }
  }

  .pagination > .active > a,
  .pagination > .active > span,
  .pagination > .active > a:hover,
  .pagination > .active > span:hover,
  .pagination > .active > a:focus,
  .pagination > .active > span:focus {
    background-color: #ebf3d4;
    border-radius: 50%;
  }

  .pagination > li > a,
  .pagination > li > span {
    color: #656565;
  }

  .pagination > li:first-child > a,
  .pagination > li:first-child > span,
  .pagination > li:last-child > a,
  .pagination > li:last-child > span {
    border-radius: unset;
  }
`;
