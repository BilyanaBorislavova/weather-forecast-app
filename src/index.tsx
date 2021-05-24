import React from 'react';
import ReactDOM from 'react-dom';
import CityProvider from './providers/city-provider';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CityProvider>
      <App />
    </CityProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
