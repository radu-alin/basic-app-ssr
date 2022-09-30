import { createStore as createStoreRedux, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import { reducers } from '../client/store/reducers';

const initialState = {};

export const createStore = (req) => {
  const axiosInstance = axios.create({
    baseURL: 'http://react-ssr-api.herokuapp.com',
    headers: {
      cookie: req.get('cookie') || '',
    },
  });

  const store = createStoreRedux(
    reducers,
    initialState,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  );

  return store;
};
