import * as actionTypes from '../../actions/action-types';

const initialStart = {
  isLoading: false,
  success: false,
  error: false,
  intervention: []
}

const interventionReducer = (state = initialStart, action) => {
  switch(action.types) {
    case actionTypes.FETCH_INCIDENT_START:
      return {
        ...state,
        isLoading: true
      }
    case actionTypes.FETCH_INCIDENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        intervention: action.payload.data,
      }
    case actionTypes.FETCH_INCIDENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      }
    default:
      return state;
  }
};

export default interventionReducer;