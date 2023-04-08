import styled, { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivatRoute';

import { fetchCurrentUser } from 'redux/authOperations';
import { useDispatch, useSelector } from 'react-redux';

import { StartScreen } from 'pages';
import RegisterPage from '../pages/RegisterPage';
import SignInPage from '../pages/SignInPage';

import { MainPage } from 'pages/mainPaige/MainPage';

import { selectorSwicherTheme } from 'redux/selectors';
import { lightTheme, darkTheme } from '../constants/theme';
import { useMemo } from 'react';
import { useState } from 'react';

const SharedLayout = lazy(() => import('../components/SharedLayout'));
//const MainTitle = lazy(() => import('../components/MainTitle/MainTitle'));
const Modal= lazy(() => import('../components/Modal'));
const Favorite = lazy(() => import('../pages/Favorite/Favorite'));
const MyRecipes = lazy(() => import('../pages/MyRecipes/MyRecipes'));
const SearchPage = lazy(() => import('../pages/SearchPage'));

const StyledApp = styled.div`
  min-height: 100vh;
  text-align: center;
  padding-top: 10rem;
  background-color: ${props => props.theme.accent};
  transition: all 1s ease;
`;

export const App = () => {
  const [start, setStart] = useState(false);
  const dispatch = useDispatch();

  const theme = useSelector(selectorSwicherTheme);

  useMemo(() => {
    dispatch(fetchCurrentUser()).then(() => {
      setStart(true);
    });
  }, [dispatch]);

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

            <Route path="/" element={<SharedLayout />}>
              <Route
                path="main"
                index
                element={<PrivateRoute component={<MainPage />} />}
              />
              <Route
                path="categories"
                element={
                  <PrivateRoute component={<StyledApp>Categories</StyledApp>} />
                }
              />
              <Route
                path="categories/:categoryName"
                element={
                  <PrivateRoute
                    component={<StyledApp>CategoriesName</StyledApp>}
                  />
                }
              />
              <Route
                path="search"
                element={<PrivateRoute component={<SearchPage />} />}
              />
              <Route
                path="add"
                element={
                  <PrivateRoute component={<StyledApp>Add</StyledApp>} />
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
                element={
                  <PrivateRoute
                    component={<StyledApp>ShoppingList</StyledApp>}
                  />
                }
              />
              <Route
                path="recipe/:recipeId"
                element={
                  <PrivateRoute
                    component={<StyledApp>RecipiesPage</StyledApp>}
                  />
                }
              />
              <Route
                path="*"
                element={
                  <PrivateRoute component={<StyledApp>NotFound</StyledApp>} />
                }
              />
              <Route
                path="modal"
                element={<PrivateRoute component={<Modal />} />}
              />
            </Route>
          </Routes>
        </ThemeProvider>
      )}
    </>
  );
};
