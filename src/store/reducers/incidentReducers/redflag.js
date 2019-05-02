import * as actionTypes from '../../actions/action-types';

const initialStart = {
  isLoading: false,
  success: false,
  error: false,
  redflag: [],
  newRedflag: false,
  singleRedflag: [],
};

const redflagReducer = (state = initialStart, action) => {
  switch (action.type) {
    case actionTypes.FETCH_INCIDENT_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_INCIDENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        redflag: action.payload.data,
      };
    case actionTypes.FETCH_INCIDENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case actionTypes.CREATE_INCIDENT_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.CREATE_INCIDENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        newRedflag: action.payload.data,
      };
    case actionTypes.CREATE_INCIDENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case actionTypes.FETCH_SINGLE_INCIDENT_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.FETCH_SINGLE_INCIDENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        singleRedflag: action.payload,
      };
    case actionTypes.FETCH_SINGLE_INCIDENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default redflagReducer;
