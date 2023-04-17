import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

const theme = {
  colors: {
    black: 'black',
    white: 'white',
    accent: 'tomato',
    error: 'orangered',
    success: 'green',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
