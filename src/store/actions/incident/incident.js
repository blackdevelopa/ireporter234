import axios from 'axios';
import * as actions from './incident-actions';

export const createNewIncident = (type, incidentData) => async dispatch => {
  dispatch(actions.createNewIncidentStart());
  try {
    const response = await axios.post(
      `${process.env.baseURL}/${type}`,
      incidentData,
      { headers: { authorization: localStorage.getItem('authorization') } }
    );
    dispatch(actions.createNewIncidentSuccess(response.data.data));
  } catch (error) {
    dispatch(actions.createNewIncidentFailure(error));
  }
};

export const fetchSingleIncident = (type, id) => async dispatch => {
  dispatch(actions.fetchSingleIncidentStart());
  try {
    const response = await axios.get(
      `${process.env.baseURL}/${type}/${id}`,
      id,
      { headers: { authorization: localStorage.getItem('authorization') } }
    );
    dispatch(actions.fetchSingleIncidentSuccess(response.data.data));
  } catch (error) {
    dispatch(actions.fetchSingleIncidentFailure(error));
  }
};

export const fetchAllIncident = type => async dispatch => {
  dispatch(actions.fetchAllIncidentStart());
  try {
    const response = await axios.get(`${process.env.baseURL}/${type}`, {
      headers: { authorization: localStorage.getItem('authorization') },
    });
    dispatch(
      actions.fetchAllIncidentSuccess({ data: response.data.data, type })
    );
  } catch (error) {
    dispatch(actions.fetchAllIncidentFailure(error));
  }
};
