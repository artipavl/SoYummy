import styled from 'styled-components';
import { ReactComponent as UserIcon } from "../../../../../images/icons/user-icon.svg";

export const EditNameFormWrap = styled.div`
  margin-top: 48px;
  position: relative
`
export const EditNameFormStyled = styled.input`
  position: relative;
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  padding: 0;
  padding-left: 42px;
  width: 100%;
  height: 48px;
  background-color: transparent;
  color: inherit;
  font-size: inherit;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.colors.whiteMuted};

`

export const UserIconStyled = styled(UserIcon)`
    position: absolute;
    top: 0;
    left: 0;

`
