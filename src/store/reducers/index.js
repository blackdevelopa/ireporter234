import { combineReducers } from 'redux';
import login from './authReducers/login';
import error from './errorReducers';
import register from './authReducers/register';

export default combineReducers({
  login,
  register,
  errors: error,
});
