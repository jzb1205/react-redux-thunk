import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import store from './store'

import { HashRouter, Link } from 'react-router-dom'

import { renderRoutes } from 'react-router-config';
import  { routes } from './router' 

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <HashRouter store={store}>
          {renderRoutes(routes)}
          <App />
        </HashRouter>  
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
