import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import './index.css';



import { App } from 'components/App';
import { theme } from 'constants';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter basename="/SoYummy">
        <ThemeProvider theme={theme}>
         <App />
         </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>
);
