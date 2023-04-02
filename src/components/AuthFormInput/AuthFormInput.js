import { FormValue } from './AuthFormInput.styled';

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
  );
};

export default AuthFormInput;
