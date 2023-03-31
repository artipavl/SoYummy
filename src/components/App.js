import { Route, Routes } from 'react-router-dom';
import { StartScreen } from 'pages';
import RegisterPage from 'pages/RegisterPage';
import SignInPage from 'pages/SignInPage';

import PublicRoute from './PublicRoute';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />

      <Route
        path="/register"
        element={
          <PublicRoute restricted>
            <RegisterPage />
          </PublicRoute>
        }
      ></Route>

      <Route
        path="/signin"
        element={
          <PublicRoute restricted>
            <SignInPage />
          </PublicRoute>
        }
      ></Route>
    </Routes>
  );
};
