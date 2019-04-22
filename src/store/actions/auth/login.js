import axios from 'axios';
import * as actionTypes from '../action-types';
import { toast } from 'react-toastify';

export const loginUserStart = () => ({
  type: actionTypes.LOGIN_USER_START,
});

export const loginUserSuccess = payload => ({
  type: actionTypes.LOGIN_USER_SUCCESS,
  payload,
});

export const loginUserFailure = errors => ({
  type: actionTypes.LOGIN_USER_FAILURE,
  error: errors,
});

export const loginUser = userData => {
  return dispatch => {
    dispatch(loginUserStart());
   axios.post('https://ireporter234.herokuapp.com/api/v1/auth/login', userData)
    .then(response => {
      dispatch(loginUserSuccess(response.data))
      localStorage.setItem('authorization', response.data.data[0].token)
    })
    .catch(errors => {
      if(errors.response.data.status === 400) {
        dispatch(loginUserFailure('sfds'))
      }
    console.log(errors.response.data.status, 'sfw')
    toast('error')
    dispatch(loginUserFailure(errors));
  })
}
}