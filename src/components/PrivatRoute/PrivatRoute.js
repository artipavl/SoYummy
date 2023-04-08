import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/selectors';
import { selectAuthIsLoading } from '../../redux/selectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLogin = useSelector(selectIsLoggedIn);
  const isLoading = useSelector(selectAuthIsLoading);
  const shouldRedirect = !isLogin && !isLoading;
  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
