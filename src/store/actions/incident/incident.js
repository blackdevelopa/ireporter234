import axios from 'axios';
import * as actions from './incident-actions';

export const createIncident = (type, incidentData) => async dispatch => {
  dispatch(actions.createIncidentStart());
  try {
    const response = await axios.post(
      `${process.env.baseURL}/${type}`,
      incidentData,
      { headers: { authorization: localStorage.getItem('authorization') } }
    );
    dispatch(actions.createIncidentSuccess(response.data.data));
  } catch (error) {
    dispatch(actions.createIncidentFailure(error));
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
