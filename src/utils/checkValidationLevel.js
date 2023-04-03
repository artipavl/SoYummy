import { val, notVal } from './regExp';

const checkValidationLevel = value => {
  const result = { isError: false, isWarning: false, isSuccess: true };

  if (value.match(val)) {
    return result;
  }
  if (value.match(notVal)) {
    return { ...result, isWarning: true };
  }
  return { ...result, isError: true, isSuccess: false };
};

export default checkValidationLevel;
