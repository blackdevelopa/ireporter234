import { combineReducers } from 'redux';
import login from './authReducers/login';
import error from './errorReducers';

export default combineReducers({
  login,
  errors: error,
});
