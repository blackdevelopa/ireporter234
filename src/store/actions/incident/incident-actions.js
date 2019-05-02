import * as actionTypes from '../action-types';

export const fetchIncidentStart = () => ({
  type: actionTypes.FETCH_INCIDENT_START,
});

export const fetchIncidentSuccess = payload => ({
  type: actionTypes.FETCH_INCIDENT_SUCCESS,
  payload,
});

export const fetchIncidentFailure = payload => ({
  type: actionTypes.FETCH_INCIDENT_FAILURE,
  payload,
});

export const createIncidentStart = () => ({
  type: actionTypes.CREATE_INCIDENT_START,
});

export const createIncidentSuccess = payload => ({
  type: actionTypes.CREATE_INCIDENT_SUCCESS,
  payload,
});

export const createIncidentFailure = payload => ({
  type: actionTypes.CREATE_INCIDENT_FAILURE,
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
