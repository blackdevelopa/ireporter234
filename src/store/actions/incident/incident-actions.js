import axios from 'axios';
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
})