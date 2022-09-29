import { FETCH_USERS_LIST } from '../actions';

const initiaState = [];

export const usersListReducer = (state = initiaState, action) => {
  switch (action.type) {
    case FETCH_USERS_LIST:
      return action.payload.data;
    default:
      return state;
  }
};
