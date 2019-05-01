import axios from 'axios';
import * as actions from './incident-actions';

export const fetchRedflagIncident = () => async dispatch => {
  dispatch(actions.fetchIncidentStart());
  try {
    const res = await axios.get(
      'https://ireporter234.herokuapp.com/api/v1/red-flags',
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
      'https://ireporter234.herokuapp.com/api/v1/red-flags',
      incidentData,
      {
        headers: {
          authorization: localStorage.getItem('authorization'),
        },
      }
    );
    dispatch(actions.createIncidentSuccess(response.data.incident));
  } catch (error) {
    dispatch(actions.createIncidentFailure(error));
  }
};
