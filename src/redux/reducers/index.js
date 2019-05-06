import { combineReducers } from 'redux';
import error from './errorReducers';
import auth from './authReducers/auth';
import incident from './incidentReducers/incident';

export default combineReducers({
  auth,
  incident,
  errors: error,
});
