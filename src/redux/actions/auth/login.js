import axios from 'axios';
import * as actionTypes from '../action-types';

export const loginUserStart = () => ({
  type: actionTypes.LOGIN_USER_START,
});

export const loginUserSuccess = payload => ({
  type: actionTypes.LOGIN_USER_SUCCESS,
  payload,
});

export const loginUserFailure = payload => ({
  type: actionTypes.LOGIN_USER_FAILURE,
  payload,
});

export const loginUser = userData => {
  return dispatch => {
    dispatch(loginUserStart());
    axios
      .post(`${process.env.baseURL}/auth/login`, userData)
      .then(response => {
        dispatch(loginUserSuccess(response.data));
        localStorage.setItem('authorization', response.data.data[0].token);
      })
      .catch(errors => {
        dispatch(loginUserFailure(errors));
      });
  };
};

export const setCurrentUser = decoded => ({
  type: actionTypes.CURRENT_USER,
  payload: decoded,
});
