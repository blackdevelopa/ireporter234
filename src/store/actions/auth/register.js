import axios from 'axios';
import * as actionTypes from '../action-types';

export const registerUserStart = () => {
  return {
    type: actionTypes.REGISTER_USER_START,
  };
};

export const registerUserSuccess = payload => {
  return {
    type: actionTypes.REGISTER_USER_SUCCESS,
    payload,
  };
};

export const registerUserFailure = error => {
  return {
    type: actionTypes.REGISTER_USER_FAILURE,
    error,
  };
};

export const registerUser = userData => {
  return dispatch => {
    dispatch(registerUserStart());
    axios
      .post('https://ireporter-node.herokuapp.com/api/v1/auth/signup', userData)
      .then(response => {
        dispatch(registerUserSuccess(response.data));
        localStorage.setItem('authorization', response.data.data[0].token);
      })
      .catch(error => {
        dispatch(registerUserFailure(error));
      });
  };
};
