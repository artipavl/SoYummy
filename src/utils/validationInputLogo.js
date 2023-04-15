import ErrorLogo from '../images/icons/Error-logo.svg';
import SuccessLogo from '../images/icons/Success-logo.svg';
import WarningLogo from '../images/icons/Warning-logo.svg';

const validationInputLogo = ({ error, touched, warn }) => {
  if (!touched) {
    return null;
  }
  if (error) {
    return `url(${ErrorLogo})`;
  }

  if (warn) {
    return `url(${WarningLogo})`;
  }

  return `url(${SuccessLogo})`;
};

export default validationInputLogo;
