import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

import { reducers } from './reducers';

// const initialState = window.INITIAL_STATE;
let initialState = {};

if (typeof window !== 'undefined') {
  initialState = window.INITIAL_STATE;
}

const axiosInstance = axios.create({
  baseURL: '/api',
});

export const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);
