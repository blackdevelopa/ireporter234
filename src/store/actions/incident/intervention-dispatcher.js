import axios from 'axios';
import * as actions from './incident-actions';

export const fetchInterventionIncident = incidentData => async dispatch => {
  dispatch(actions.fetchIncidentStart());
  try {
    const res = await axios.get('http://ireporter234.herokuapp.com/api/v1/interventions', 
    {headers: {authorization: localStorage.getItem('authorization')}}
    );
    dispatch(actions.fetchIncidentSuccess());
  } catch (errors) {
    dispatch(actions.fetchIncidentFailure());
  }
}