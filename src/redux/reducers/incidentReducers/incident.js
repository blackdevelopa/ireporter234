import * as actionTypes from '../../actions/action-types';

const initialStart = {
  isLoading: false,
  error: false,
  incident: [],
  newIncident: false,
  singleIncident: {},
  editIncident: {},
};

const incidentReducer = (state = initialStart, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ALL_INCIDENT_START:
      return {
        ...state,
        isLoading: true,
      };
    case `${actionTypes.FETCH_ALL_INCIDENT_SUCCESS}_INTERVENTIONS`:
    case actionTypes.FETCH_ALL_INCIDENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        incident: action.payload,
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
        newIncident: action.payload,
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
        singleIncident: action.payload,
      };
    case actionTypes.FETCH_SINGLE_INCIDENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case actionTypes.EDIT_INCIDENT_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.EDIT_INCIDENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        editIncident: action.payload,
      };
    case actionTypes.EDIT_INCIDENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    case actionTypes.DELETE_INCIDENT_START:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.DELETE_INCIDENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true,
        singleIncident: action.payload,
      };
    case actionTypes.DELETE_INCIDENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default incidentReducer;
