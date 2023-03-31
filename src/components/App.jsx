import { Route, Routes } from 'react-router-dom';

import { StartScreen } from 'pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<StartScreen/>} />
      <Route path="/register" element={<div>register</div>} />
      <Route path="/login" element={<div>login</div>} />
    </Routes>
  );
};
