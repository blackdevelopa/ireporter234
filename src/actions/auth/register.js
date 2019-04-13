import axios from 'axios';
import * as actionTypes from '../action-types';

/**
 * @description - register success actions
 * @param {*} payload - success response
 * @returns {object} - register success action
 */
export const registerUserSuccess = payload => ({
  type: actionTypes.REGISTER_USER_SUCCESS,
  payload,
});

/**
 * @description - register failure actions
 * @param {*} payload - failure response
 * @returns {object} - register failure action
 */
export const registerUserFailure = payload => ({
  type: actionTypes.REGISTER_USER_FAILURE,
  payload,
});

/**
 * @description - registers user
 * @param {*} user - dispatch user object
 * @returns {fn} - register dispatch function
 */
export const registerUser = user => async dispatch => {
  dispatch({ type: actionTypes.REGISTER_USER });
  try {
    const res = await axios.post(
      `https://ireporter234.herokuapp.com/api/v1/auth/signup`,
      {
        ...user,
      }
    );
    dispatch(registerUserSuccess(res.data));
  } catch ({ type, response }) {
    dispatch(registerUserFailure(response.data.errors));
  }
};

export default registerUser;
