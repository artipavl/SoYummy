import styled from 'styled-components';
import editIcon from '../../../../../images/icons/edit-icon.svg';
import userIcon from '../../../../../images/icons/name.svg'

export const EditNameFormWrap = styled.div`
  margin-top: 48px;
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
  background-image: url('${userIcon}');
  color: inherit;
  font-size: inherit;
  border-radius: 6px;
  border: 1px solid #23262A;

  &:before {
    content: '';
    position: absolute;
    background-image: url('${editIcon}');
    background-size: 200px 200px;


  }

`
