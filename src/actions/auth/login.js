import axios from 'axios';
import {LOGIN_USER_START, LOGIN_USER_FAILURE, LOGIN_USER_SUCCESS} from '../action-types';

export const loginUserStart = () => ({
  type: LOGIN_USER_START,
})
export const loginUserSuccess = payload => ({
  type: LOGIN_USER_SUCCESS,
  payload,
});

export const loginUserFailure = payload => ({
  type: LOGIN_USER_FAILURE,
  payload,
});

export const loginUser = user => async dispatch => {
  dispatch({ type: LOGIN_USER_START });
  try {
    const res = await axios.post(
      `https://ireporter234.herokuapp.com/api/v1/auth/login`,
      {
        ...user,
      }
    );
    console.log(res.data);
    
    dispatch(loginUserSuccess(res.data));
  } catch ({ type, response }) {
    dispatch(loginUserFailure(response.data.errors));
  }
};

