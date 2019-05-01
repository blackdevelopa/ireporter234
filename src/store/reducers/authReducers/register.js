import * as actionTypes from '../../actions/action-types';

const initialState = {
  isLoading: false,
  success: false,
  error: false,
  user: null,
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_USER_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        isAuthenticated: true,
        user: action.payload,
      };
    case actionTypes.REGISTER_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        error: true,
      };
    default:
      return state;
  }
};

export default registerReducer;
