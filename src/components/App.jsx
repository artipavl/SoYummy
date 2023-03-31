import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Test</div>} />
      <Route path="/register" element={<div>register</div>} />
      <Route path="/login" element={<div>login</div>} />
    </Routes>
  );
};
