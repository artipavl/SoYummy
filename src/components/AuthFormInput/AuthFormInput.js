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
  warn,
}) => {
  return (
    <FormValueContainer
      error={error}
      touched={touched}
      value={value}
      warn={warn}
    >
      <FormValue
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        error={error}
        touched={touched}
        warn={warn}
      />
    </FormValueContainer>
  );
};

export default AuthFormInput;
