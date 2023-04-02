import { FormValue, FormValueContainer } from './AuthFormInput.styled';

const AuthFormInput = ({
  name,
  type,
  placeholder,
  onChange,
  onBlur,
  value,
  error,
  touched,
}) => {
  return (
    <FormValueContainer>
      <FormValue
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        error={error}
        touched={touched}
      />
    </FormValueContainer>
  );
};

export default AuthFormInput;
