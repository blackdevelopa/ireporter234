import {
  LOGIN_USER_FAILURE,
  REGISTER_USER_FAILURE,
  CLEAR_AUTH_ERRORS,
} from '../actions/action-types';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER_FAILURE:
      return { ...action.payload };
    case REGISTER_USER_FAILURE:
      return { ...action.payload };
    case CLEAR_AUTH_ERRORS:
      return {};
    default:
      return state;
  }
};
