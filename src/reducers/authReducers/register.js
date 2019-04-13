import * as actionTypes from '../../actions/action-types';

/**
 * @description - register user
 * @param {*} state -
 * @returns {object} -
 */
const registerSuccess = ({ state, action }) => ({
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
    case actionTypes.REGISTER_USER_SUCCESS:
      return registerSuccess(state);
    default:
      return state;
  }
};

export default reducer;
