import { FETCH_CURRENT_USER } from '../actions';

const initiaState = null;

export const authReducer = (state = initiaState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false;
    default:
      return state;
  }
};
