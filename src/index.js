import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store from 'redux/store';
import { GlobalStyle } from 'GlobalStyle';
import './fonts.css';


import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter basename="/SoYummy">
          <App />
          <GlobalStyle />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
);
