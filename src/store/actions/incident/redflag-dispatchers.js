import axios from 'axios';
import * as actions from './incident-actions';

export const fetchRedflagIncident = () => async dispatch => {
  dispatch(actions.fetchIncidentStart());
  try {
    const res = await axios.get(
      'https://ireporter-node.herokuapp.com/api/v1/red-flags',
      { headers: { authorization: localStorage.getItem('authorization') } }
    );
    dispatch(actions.fetchIncidentSuccess(res.data));
  } catch (error) {
    dispatch(actions.fetchIncidentFailure(error));
  }
};

export const createRedflagIncident = incidentData => async dispatch => {
  dispatch(actions.createIncidentStart());
  try {
    const response = await axios.post(
      'https://ireporter-node.herokuapp.com/api/v1/red-flags',
      incidentData,
      {
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      }
    );
    dispatch(actions.createIncidentSuccess(response.data.data));
  } catch (error) {
    dispatch(actions.createIncidentFailure(error));
  }
};

export const fetchSingleRedflagIncident = id => async dispatch => {
  dispatch(actions.fetchSingleIncidentStart());
  try {
    const response = await axios.get(
      `https://ireporter-node.herokuapp.com/api/v1/red-flags/${id}`,
      {
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      }
    );
    dispatch(actions.fetchSingleIncidentSuccess(response.data.data));
  } catch (error) {
    dispatch(actions.fetchSingleIncidentFailure(error));
  }
};
