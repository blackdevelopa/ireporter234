import axios from 'axios';
import * as actions from './incident-actions';

export const fetchRedflagIncident = () => async dispatch => {
  dispatch(actions.fetchIncidentStart());
  try {
    const res = await axios.get('https://ireporter234.herokuapp.com/api/v1/red-flags', 
    {headers: {authorization: localStorage.getItem('authorization')}}
    );
    dispatch(actions.fetchIncidentSuccess());
  } catch (error) {
    dispatch(actions.fetchIncidentFailure(error))
  }
};