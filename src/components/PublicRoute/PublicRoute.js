import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { selectIsLoggedIn } from 'redux/selectors';

const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to="/"></Navigate> : children;
};

export default PublicRoute;
