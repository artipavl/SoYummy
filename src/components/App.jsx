import { Route, Routes } from 'react-router-dom';
import { StartScreen } from 'pages';
import RegisterPage from 'pages/RegisterPage';
import SignInPage from 'pages/SignInPage';
import PublicRoute from './PublicRoute';

import Favorite from '../pages/Favorite/Favorite';
import MyRecipes from '../pages/MyRecipes/MyRecipes';
import { MainPage } from 'pages/mainPaige/MainPage';

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
      />
      <Route
        path="/signin"
        element={
          <PublicRoute restricted>
            <SignInPage />
          </PublicRoute>
        }
      />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/my" element={<MyRecipes />} />
      <Route path="/main" element={<MainPage />} />
    </Routes>
  );
};
