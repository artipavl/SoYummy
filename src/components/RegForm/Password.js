import { useField, ErrorMessage } from 'formik';

import formStyles from 'utils/formStyles';
import { securePasswordRegExp } from 'utils/regExp';

import AuthFormInput from 'components/AuthFormInput';

import { Pswrd, FormValueContainer } from './CombinedFormStyles.styled';

const Password = () => {
  const [inputProps, inputState] = useField('password');
  const { touched, error } = inputState;
  const { value } = inputProps;

  const isSecurePassword = securePasswordRegExp.test(value);

  const isValid = touched && !error && isSecurePassword;
  const isWarn = touched && !error && !isSecurePassword;

  return (
    <>
      <FormValueContainer warn={isWarn} error={error} touched={touched}>
        <AuthFormInput
          error={error}
          touched={touched}
          name="password"
          type="password"
          placeholder="Password"
          {...inputProps}
          valid={isValid}
        />
        <Pswrd
          style={{
            stroke: !touched ? '#FFFFFF' : error ? '#E74A3B' : '#3CBC81',
          }}
        />
      </FormValueContainer>

      <ErrorMessage name="password" style={{ marginTop: '0' }}>
        {msg => <div style={{ ...formStyles.message.error }}>{msg}</div>}
      </ErrorMessage>

      {isWarn && (
        <div style={{ ...formStyles.message.warning }}>
          Your password is little secure
        </div>
      )}
      {isValid && (
        <div style={{ ...formStyles.message.success }}>Password is secure</div>
      )}
    </>
  );
};

export default Password;
