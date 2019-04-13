import { combineReducers } from 'redux';
import register from './authReducers/register';
import login from './authReducers/login';
import error from './errorReducers';

export default combineReducers({
  register,
  login,
  errors: error,
});
