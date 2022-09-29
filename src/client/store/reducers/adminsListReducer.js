import { FETCH_ADMINS_LIST } from '../actions';

const initiaState = [];

export const adminsListReducer = (state = initiaState, action) => {
  switch (action.type) {
    case FETCH_ADMINS_LIST:
      return action.payload.data;
    default:
      return state;
  }
};
