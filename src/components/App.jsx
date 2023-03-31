import { Route, Routes } from 'react-router-dom';

import { StartScreen } from 'pages';
import Favorite from '../pages/Favorite/Favorite';
import MyRecipes from '../pages/MyRecipes/MyRecipes';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/register" element={<div>register</div>} />
      <Route path="/login" element={<div>login</div>} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/my" element={<MyRecipes />} />
    </Routes>
  );
};
