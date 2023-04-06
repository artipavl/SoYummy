import { EditNameFormStyled, EditNameFormWrap } from "./EditNameForm.styled"


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
