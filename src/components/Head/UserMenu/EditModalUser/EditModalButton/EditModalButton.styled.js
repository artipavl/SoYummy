import styled from "styled-components";

export const EditBtnWrap = styled.div`
  margin-top: 24px;

`
export const  EditModalBtn = styled.button`
  display: block;
  width: 100%;
  padding: 14px 84px;
  font-size: 14px;
  color: ${props => props.theme.colors.textWhite};
  background-color: ${props => props.theme.colors.accent} ;
  border-radius: 6px;
  transition: color 250ms linear;

  &:hover, &:focus {
    color: ${props => props.theme.colors.accentDark}
  }

  /* @media ${props => props.theme.device.tablet} {

    padding: 16px 50px;
    font-size: 16px;
  }

  @media ${props => props.theme.device.desktop} {

  } */
`

