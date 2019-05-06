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

export const registerUser = userData => dispatch => {
  dispatch(registerUserStart());
  return axios
    .post(`${process.env.baseURL}/auth/signup`, userData)
    .then(response => {
      localStorage.setItem('authorization', response.data.data[0].token);
      dispatch(registerUserSuccess(response.data));
    })
    .catch(error => {
      dispatch(registerUserFailure(error));
    });
};
