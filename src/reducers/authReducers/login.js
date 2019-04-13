import * as actionTypes from '../../actions/action-types';

/**
 * @description - login user
 * @param {*} state -
 * @returns {object} -
 */
const loginSuccess = ({ state, action }) => ({
  ...state,
  isLoading: true,
  success: true,
  response: action.payload,
});

/**
 * @description -
 * @param {*} state
 * @param {*} action
 * @returns {fn} -
 */
const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_SUCCESS:
      return loginSuccess(state);
    default:
      return state;
  }
};

export default reducer;
