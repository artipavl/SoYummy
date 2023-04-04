import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivatRoute';

import { fetchCurrentUser } from 'redux/authOperations';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { StartScreen } from 'pages';
import RegisterPage from '../pages/RegisterPage';
import SignInPage from '../pages/SignInPage';

const SharedLayout = lazy(() => import('../components/SharedLayout'));
const MainTitle = lazy(() => import('../components/MainTitle/MainTitle'));
const Favorite = lazy(() => import('../pages/Favorite/Favorite'));
const MyRecipes = lazy(() => import('../pages/MyRecipes/MyRecipes'));

const tempStyles = {
  paddingTop: 100,
  paddingBottom: 100,
  fontSize: 50,
  textAlign: 'center',
};

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
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
            element={<PrivateRoute component={<MainTitle />} />}
          />
          <Route
            path="categories"
            element={
              <PrivateRoute
                component={<div style={tempStyles}>Categories</div>}
              />
            }
          />
          <Route
            path="categories/:categoryName"
            element={
              <PrivateRoute
                component={<div style={tempStyles}>CategoriesName</div>}
              />
            }
          />
          <Route
            path="search"
            element={
              <PrivateRoute component={<div style={tempStyles}>Search</div>} />
            }
          />
          <Route
            path="add"
            element={
              <PrivateRoute component={<div style={tempStyles}>Add</div>} />
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
                component={<div style={tempStyles}>ShoppingList</div>}
              />
            }
          />
          <Route
            path="recipe/:recipeId"
            element={
              <PrivateRoute
                component={<div style={tempStyles}>RecipiesPage</div>}
              />
            }
          />
          <Route
            path="*"
            element={
              <PrivateRoute
                component={<div style={tempStyles}>NotFound</div>}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
};
