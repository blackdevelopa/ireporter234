import axios from 'axios';
import * as actionTypes from '../action-types';

/**
 * @description - login success actions
 * @param {*} payload - success response
 * @returns {object} - login success action
 */
export const loginUserSuccess = payload => ({
  type: actionTypes.LOGIN_USER_SUCCESS,
  payload,
});

/**
 * @description - failure response actions
 * @param {*} payload - failure response
 * @returns {object} - failure respose action
 */
export const loginUserFailure = payload => ({
  type: actionTypes.loginUserFailure,
  payload,
});

/**
 * @description - logs user
 * @param {*} user - dispatch user object
 * @returns {fn} - log dispatch function
 */
export const loginUser = user => async dispatch => {
  dispatch({ type: actionTypes.LOGIN_USER });
  try {
    const res = await axios.post(
      `https://ireporter234.herokuapp.com/api/v1/auth/login`,
      {
        ...user,
      }
    );
    dispatch(loginUserSuccess(res.data));
  } catch ({ type, response }) {
    dispatch(loginUserFailure(response.data.errors));
  }
};

export default loginUser;
