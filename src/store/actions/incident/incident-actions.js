import * as actionTypes from '../action-types';

export const fetchAllIncidentStart = () => ({
  type: actionTypes.FETCH_ALL_INCIDENT_START,
});

export const fetchAllIncidentSuccess = payload => ({
  type: `${
    actionTypes.FETCH_ALL_INCIDENT_SUCCESS
  }_${payload.type.toUpperCase()}`,
  payload: payload.data,
});

export const fetchAllInterventionSuccess = payload => ({
  type: actionTypes.FETCH_ALL_INTERVENTION_SUCCESS,
  payload,
});

export const fetchAllIncidentFailure = payload => ({
  type: actionTypes.FETCH_ALL_INCIDENT_FAILURE,
  payload,
});

export const createNewIncidentStart = () => ({
  type: actionTypes.CREATE_NEW_INCIDENT_START,
});

export const createNewIncidentSuccess = payload => ({
  type: actionTypes.CREATE_NEW_INCIDENT_SUCCESS,
  payload,
});

export const createNewIncidentFailure = payload => ({
  type: actionTypes.CREATE_NEW_INCIDENT_FAILURE,
  payload,
});

export const fetchSingleIncidentStart = () => ({
  type: actionTypes.FETCH_SINGLE_INCIDENT_START,
});

export const fetchSingleIncidentSuccess = payload => ({
  type: actionTypes.FETCH_SINGLE_INCIDENT_SUCCESS,
  payload,
});

export const fetchSingleIncidentFailure = payload => ({
  type: actionTypes.FETCH_SINGLE_INCIDENT_FAILURE,
  payload,
});
