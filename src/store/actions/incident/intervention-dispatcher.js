import axios from 'axios';
import * as actions from './incident-actions';

export const fetchInterventionIncident = () => async dispatch => {
  dispatch(actions.fetchIncidentStart());
  try {
    const response = await axios.get(`${process.env.baseURL}/interventions`, {
      headers: { authorization: localStorage.getItem('authorization') },
    });
    dispatch(actions.fetchIncidentSuccess(response.data));
  } catch (errors) {
    dispatch(actions.fetchIncidentFailure());
  }
};

export const createInterventionIncident = incidentData => async dispatch => {
  dispatch(actions.createIncidentStart());
  try {
    const response = await axios.post(
      `${process.env.baseURL}/interventions`,
      incidentData,
      { headers: { authorization: localStorage.getItem('authorization') } }
    );
    dispatch(actions.createIncidentSuccess(response.data.data));
  } catch (error) {
    dispatch(actions.createIncidentFailure(error));
  }
};

export const fetchSingleInterventionIncident = id => async dispatch => {
  dispatch(actions.fetchSingleIncidentStart());
  try {
    const response = await axios.get(
      `${process.env.baseURL}/interventions/${id}`,
      id,
      { headers: { authorization: localStorage.getItem('authorization') } }
    );
    dispatch(actions.fetchSingleIncidentSuccess(response.data.data));
  } catch (error) {
    dispatch(actions.fetchSingleIncidentFailure(error));
  }
};
