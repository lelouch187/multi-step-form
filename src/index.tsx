import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';

import './assets/fonts/Ubuntu-Bold.ttf';
import './assets/fonts/Ubuntu-Medium.ttf';
import './assets/fonts/Ubuntu-Regular.ttf';
import { Provider } from 'react-redux';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
