import {
  CLEAR_AUTH_ERRORS,
} from '../actions/action-types';

export default (state = {}, action) => {
  switch (action.type) {
    case CLEAR_AUTH_ERRORS:
      return {};
    default:
      return state;
  }
};
