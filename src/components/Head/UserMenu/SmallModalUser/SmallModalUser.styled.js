import styled from 'styled-components';

import { ReactComponent as EditIcon } from '../../../../images/icons/edit-icon.svg';

export const EditIconStyled = styled(EditIcon)`
  width: 14px;
  transition: color 250ms linear;
`

export const UserModalSmallBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 996;
  background-color: rgba(255, 255, 255, 0.01);
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &.open {
    opacity: 1;
    visibility: visible;
  }
`

export const UserModalSmall = styled.div`
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 18px;
  background-color: ${props => props.theme.colors.editProfileModal};
  top: 72px;
  right: 60px;
  width: 161px;
  height: 130px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.accent};
  z-index: 998;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;

  &.open {
    opacity: 1;
    visibility: visible;
  }

  @media ${props => props.theme.device.tablet} {
    right: 128px;
    top: 78px;
    width: 177px;
    height: 134px;
    border: none;
  }
  @media ${props => props.theme.device.desktop} {
    right: 211px;
    top: 78px;
  }


`
export const Container = styled.div`
  position: relative;
  display: block;
  height: auto;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.accent};
  z-index: 997;
  max-width: 375px;

  @media ${props => props.theme.device.tablet} {
    max-width: 768px;

  }
  @media ${props => props.theme.device.desktop} {
    max-width: 1440px;

  }

  `

export const EditProfileButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  cursor: pointer;
  font-size: 14px;
  color: ${props => props.theme.colors.text};
  transition: color 250ms linear;

  .hoverText,
  .hoverIcon {
    color: ${props => props.theme.colors.text};
    transition: color 250ms linear;
    path {
      stroke: ${props => props.theme.colors.text};
      transition: stroke 250ms linear;
    }

  }

  &:hover .hoverText,
  &:hover .hoverIcon {
    color: ${props => props.theme.colors.accentCurrent};
    path {
      stroke: ${props => props.theme.colors.accentCurrent};
    }
  }
`

export const EditText = styled.p`
  display: block;
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${props => props.theme.colors.text};
`


export const LogOutButton = styled.button`
  margin-top: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.accentCurrent};
  color: rgb(255, 255, 255);
  border-radius: 24px 44px;
  border: 1px solid ${props => props.theme.colors.accentCurrent};
  transition: all 250ms linear;
  height: 43px;
  width: 100%;

  &:hover, &:focus {
    background-color: ${props => props.theme.colors.accentDark};
    border: 1px solid ${props => props.theme.colors.accentDark};
  }

`
export const LogOutButtonText = styled.p`
  font-size: 14px;
`



