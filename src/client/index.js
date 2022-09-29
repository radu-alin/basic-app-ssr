import 'babel-polyfill';

// Start point for the client side application
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import { store } from './store';
import { Routes } from './Routes';

const App = () => (
  <Provider store={store}>
    <BrowserRouter context={{}}>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>
);

ReactDOM.hydrate(<App />, document.querySelector('#root'));
