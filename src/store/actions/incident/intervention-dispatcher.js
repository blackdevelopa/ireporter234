import axios from 'axios';
import * as actions from './incident-actions';

export const fetchInterventionIncident = () => async dispatch => {
  dispatch(actions.fetchIncidentStart());
  try {
    const response = await axios.get(
      'https://ireporter-node.herokuapp.com/api/v1/interventions',
      { headers: { authorization: localStorage.getItem('authorization') } }
    );
    dispatch(actions.fetchIncidentSuccess(response.data));
  } catch (errors) {
    dispatch(actions.fetchIncidentFailure());
  }
};

export const createInterventionIncident = incidentData => async dispatch => {
  dispatch(actions.createIncidentStart());
  try {
    const response = await axios.post(
      'https://ireporter-node.herokuapp.com/api/v1/interventions',
      incidentData,
      { headers: { authorization: localStorage.getItem('authorization') } }
    );
    dispatch(actions.createIncidentSuccess(response.data.data));
  } catch (error) {
    dispatch(actions.createIncidentFailure(error));
  }
};
