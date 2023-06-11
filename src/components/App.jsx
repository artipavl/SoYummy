import { ThemeProvider } from 'styled-components';
import { Route, Routes, useLocation } from 'react-router-dom';
import { lazy } from 'react';

import MyRecipes from '../pages/MyRecipes/MyRecipes';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivatRoute';

import {
  fetchCurrentUser,
  fetchGoogleUser,
  fetchAchievements,
} from 'redux/authOperations';
import { useDispatch, useSelector } from 'react-redux';

import { StartScreen } from 'pages';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import SignInPage from '../pages/SignInPage/SignInPage';

import { MainPage } from 'pages/MainPage/MainPage';

import { selectorSwicherTheme } from 'redux/selectors';
import { lightTheme, darkTheme } from '../constants/theme';
import { useMemo } from 'react';
import { useState } from 'react';
import { CategoriesPage } from 'pages/CategoriesPage/CategoriesPage';
import { useEffect } from 'react';
import { Loader } from './Loader/Loader';
import { LoaderContainer } from './AddRecipeForm/AddRecipeForm.styled';

const Verification = lazy(() => import('pages/Varification/Verification'));
const SharedLayout = lazy(() => import('../components/SharedLayout'));

// const Modal = lazy(() => import('../components/Modal'));

const Favorite = lazy(() => import('../pages/Favorite/Favorite'));
const AddRecipe = lazy(() => import('../pages/AddRecipe/AddRecipe'));
const RecipePage = lazy(() => import('../pages/RecipePage/RecipePage'));

const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

const ShoppingList = lazy(() =>
  import('../pages/ShoppingList/ShoppingList.js')
);
const SearchPage = lazy(() => import('../pages/SearchPage/SearchPage'));

export const App = () => {
  const [start, setStart] = useState(false);
  const dispatch = useDispatch();

  const theme = useSelector(selectorSwicherTheme);

  useMemo(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchCurrentUser());
        setStart(true);
        await dispatch(fetchAchievements());
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);

  const location = useLocation();

  useEffect(() => {
    let googleToken = location.search.substring(6);
    if (googleToken.length > 100) {
      dispatch(fetchGoogleUser(googleToken)).then(() => {
        setStart(true);
      });
    }
  }, [dispatch, location]);

  if (!start) {
    return (
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      </ThemeProvider>
    );
  }

  return (
    <>
      {start && (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <Routes>
            <Route
              path="/"
              element={
                <PublicRoute component={<StartScreen />} redirectTo="/main" />
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute component={<RegisterPage />} redirectTo="/main" />
              }
            />
            <Route
              path="/signin"
              element={
                <PublicRoute component={<SignInPage />} redirectTo="/main" />
              }
            />
            <Route path="verification/:id" element={<Verification />} />

            <Route path="/" element={<SharedLayout />}>
              <Route
                path="main"
                index
                element={<PrivateRoute component={<MainPage />} />}
              />
              <Route
                path="categories"
                element={<PrivateRoute component={<CategoriesPage />} />}
              />
              <Route
                path="categories/:categoryName"
                element={<PrivateRoute component={<CategoriesPage />} />}
              />
              <Route
                path="search"
                element={<PrivateRoute component={<SearchPage />} />}
              />
              <Route
                path="add"
                element={
                  <PrivateRoute component={<AddRecipe />} redirectTo="/my" />
                }
              />
              <Route
                path="my"
                element={<PrivateRoute component={<MyRecipes />} />}
              />
              <Route
                path="favorite"
                element={<PrivateRoute component={<Favorite />} />}
              />
              <Route
                path="shopping-list"
                element={<PrivateRoute component={<ShoppingList />} />}
              />
              <Route
                path="recipe/:recipeId"
                element={<PrivateRoute component={<RecipePage />} />}
              />
              <Route
                path="*"
                element={<PrivateRoute component={<NotFound />} />}
              />
            </Route>
          </Routes>
        </ThemeProvider>
      )}
    </>
  );
};
