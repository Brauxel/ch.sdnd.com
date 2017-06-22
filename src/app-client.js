import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/app-routes';

window.onload = () => {
  ReactDOM.render(<AppRoutes />, document.getElementById('app'));
};

