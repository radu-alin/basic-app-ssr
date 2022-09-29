import React from 'react';
import { renderRoutes } from 'react-router-config';

import { fetchCurrentUser } from './store/actions';

import Header from './components/Header';

const App = ({ route }) => {
  return (
    <div style={{width: '100%'}}>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

const loadData = (store) => store.dispatch(fetchCurrentUser());

export default {
  component: App,
  loadData,
};
