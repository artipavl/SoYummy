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
    <FormValueContainer error={error} touched={touched}>
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
