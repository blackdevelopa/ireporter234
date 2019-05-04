import { combineReducers } from 'redux';
import login from './authReducers/auth';
import error from './errorReducers';
import register from './authReducers/register';
import redflag from './incidentReducers/redflag';
import intervention from './incidentReducers/intervention';

export default combineReducers({
  login,
  register,
  redflag,
  intervention,
  errors: error,
});
