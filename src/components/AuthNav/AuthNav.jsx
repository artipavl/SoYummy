import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <nav>
      <Link to="/register">Registration</Link>
      <Link to="/signin">SignInPage</Link>
    </nav>
  );
};

export default AuthNav;
