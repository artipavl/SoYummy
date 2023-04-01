import { FormValue } from './AuthFormInput.styled';

const AuthFormInput = ({
  name,
  type,
  placeholder,
  onChange,
  onBlur,
  value,
}) => {
  return (
    <FormValue
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
  );
};

export default AuthFormInput;
