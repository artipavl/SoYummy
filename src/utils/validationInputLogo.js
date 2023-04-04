import ErrorLogo from '../images/icons/Error-logo.svg';
import SuccessLogo from '../images/icons/Success-logo.svg';
import WarningLogo from '../images/icons/Warning-logo.svg';

const validationInputLogo = ({ error, touched, warn, value }) => {
  if (!value || !touched) {
    return null;
  }
  if (warn) {
    return `url(${WarningLogo})`;
  }
  if (error) {
    return `url(${ErrorLogo})`;
  }

  return `url(${SuccessLogo})`;
};

export default validationInputLogo;
