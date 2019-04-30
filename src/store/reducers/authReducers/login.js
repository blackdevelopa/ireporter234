import * as actionTypes from '../../actions/action-types';

const initialState = {
  isLoading: false,
  success: false,
  error: '',
  user: null,
};


const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_START:
      return {
        ...state,
        isLoading:true
      }
    case actionTypes.LOGIN_USER_SUCCESS:
      const newUser = {
        ...action.payload,
      }
      return  {
        ...state,
        isLoading: false,
        success: true,
        user: newUser,
        isAuthenticated: true
      }
    case actionTypes.LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        isAuthenticated: false,
      }
    default:
      return state;
  }
};

export default loginReducer;
