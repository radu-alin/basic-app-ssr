import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { usersListReducer } from './usersListReducer';
import { adminsListReducer } from './adminsListReducer';

export const reducers = combineReducers({
  auth: authReducer,
  usersList: usersListReducer,
  adminsList: adminsListReducer,
});
