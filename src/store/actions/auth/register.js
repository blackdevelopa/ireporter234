import axios from 'axios';
import * as actionTypes from '../action-types';

export const registerUserStart = () => ({
  type: actionTypes.REGISTER_USER_START,
});

export const registerUserSuccess = payload => ({
  type: actionTypes.REGISTER_USER_SUCCESS,
  payload,
});

export const registerUserFailure = payload => ({
  type: actionTypes.REGISTER_USER_FAILURE,
  payload,
});

export const registerUser = userData => {
  return dispatch => {
    dispatch(registerUserStart());
    axios
      .post(`${process.env.baseURL}/auth/signup`, userData)
      .then(response => {
        dispatch(registerUserSuccess(response.data));
        localStorage.setItem('authorization', response.data.data[0].token);
      })
      .catch(error => {
        dispatch(registerUserFailure(error));
      });
  };
};
