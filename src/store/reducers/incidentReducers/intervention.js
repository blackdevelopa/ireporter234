import * as actionTypes from '../../actions/action-types';

const initialStart = {
  isLoading: false,
  success: false,
  error: false,
  intervention: [],
  newIntervention: false,
  singleIntervention: [],
};

const interventionReducer = (state = initialStart, action) => {
  switch (action.type) {
    case `${actionTypes.FETCH_ALL_INCIDENT_START}_INTERVENTIONS`:
      return {
        ...state,
        isLoading: true,
      };
    case `${actionTypes.FETCH_ALL_INCIDENT_SUCCESS}_INTERVENTIONS`:
      return {
        ...state,
        isLoading: false,
        success: true,
        intervention: action.payload,
      };
    case actionTypes.FETCH_ALL_INCIDENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case actionTypes.CREATE_NEW_INCIDENT_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.CREATE_NEW_INCIDENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        newIntervention: action.payload,
      };
    case actionTypes.CREATE_NEW_INCIDENT_FAILURE:
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
        singleIntervention: action.payload,
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

export default interventionReducer;
