import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './App';

import './assets/fonts/Ubuntu-Bold.ttf'
import './assets/fonts/Ubuntu-Medium.ttf'
import './assets/fonts/Ubuntu-Regular.ttf'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);

