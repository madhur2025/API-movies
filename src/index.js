import React from 'react';

import ReactDOM from 'react-dom/client'; 
// react-dom/client is a package in react that provides methods for rendering react components. (react 19)
// why not react-dom ? react dom used in old version like react 18.

import './index.css';
import App from './App'; // it is the root component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// index.js file is the entry point of the react application.