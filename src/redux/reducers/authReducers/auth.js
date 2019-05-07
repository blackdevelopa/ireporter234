import * as actionTypes from '../../actions/action-types';

const initialState = {
  isLoading: false,
  isAuthenticated: false,
  success: false,
  error: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_START:
    case actionTypes.REGISTER_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.LOGIN_USER_SUCCESS:
    case actionTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        user: action.payload,
        isAuthenticated: true,
      };
    case actionTypes.LOGIN_USER_FAILURE:
    case actionTypes.REGISTER_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case actionTypes.CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.decoded,
      };
    default:
      return state;
  }
};

export default authReducer;
