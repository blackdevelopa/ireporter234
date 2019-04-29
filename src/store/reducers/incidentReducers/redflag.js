import * as actionTypes from '../../actions/action-types';

const initialStart = {
  isLoading: false,
  success: false,
  error: false,
}

const redflagReducer = (state = initialStart, action) => {
  switch(action.type) {
    case actionTypes.FETCH_INCIDENT_START:
      return {
        ...state,
        isLoading: true
      }
      case actionTypes.FETCH_INCIDENT_SUCCESS:
        const newIncident = {
          ...action.payload
        }
        return {
          ...state,
          isLoading: false,
          success: true,
          redflag: newIncident
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

export default redflagReducer;