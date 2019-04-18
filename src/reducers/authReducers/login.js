import {LOGIN_USER_START, LOGIN_USER_SUCCESS} from '../../actions/action-types';

const initialState = {
  isLoading: false,
  success: false,
  user: ""
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER_START:
      return {
        ...state,
        isLoading:true
      }
    case LOGIN_USER_SUCCESS:
      return  {
        ...state,
        isLoading: false,
        success: true,
        user: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
