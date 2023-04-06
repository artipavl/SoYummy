import { EditNameFormStyled, EditNameFormWrap } from "./EditNameForm.styled"
import { UserIconStyled } from "./EditNameForm.styled";

import {useFiel, ErrorMessage} from 'formik'

export const EditNameForm = ({ name, handleChangeName }) => {

  

  return (
    <EditNameFormWrap>
      <EditNameFormStyled
        type="name"
        id="name"
        value={name}
        onChange={handleChangeName}
        required

      />
    </EditNameFormWrap>
  );
}
