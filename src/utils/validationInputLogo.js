import ErrorLogo from '../images/icons/Error-logo.svg';
import SuccessLogo from '../images/icons/Success-logo.svg';
import WarningLogo from '../images/icons/Warning-logo.svg';

const validationInputLogo = ({ error, touched, value }) => {
  if (!value || !touched) {
    return null;
  }

  if (error) {
    if (value.length < 8) {
      return `url(${ErrorLogo})`;
    } else {
      return `url(${WarningLogo})`;
    }
  }
  return `url(${SuccessLogo})`;
};

export default validationInputLogo;
