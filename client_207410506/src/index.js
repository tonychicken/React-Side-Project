/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App_06 from './App_06';
import {AppProvider_06} from './context/appContext_06'
ReactDOM.render(
  <React.StrictMode>
    <AppProvider_06>
    <App_06 />
    </AppProvider_06>
  </React.StrictMode>,
  document.getElementById('root')
);
