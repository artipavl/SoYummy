import { Route, Routes } from 'react-router-dom';

import PublicRoute from './PublicRoute';

import RegisterPage from 'pages/RegisterPage';
import SignInPage from 'pages/SignInPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Test</div>} />

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
