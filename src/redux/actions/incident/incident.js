import axios from 'axios';
import * as actions from './incident-actions';
import { uploadMedia } from '../../../utils/helpers';

export const createNewIncident = (type, incidentData) => async dispatch => {
  const { comment, location } = incidentData;
  dispatch(actions.createNewIncidentStart());
  try {
    const images = await uploadMedia(incidentData.images);
    const data = {
      comment,
      location,
      images,
    };
    const response = await axios.post(`${process.env.baseURL}/${type}`, data, {
      headers: { authorization: localStorage.getItem('authorization') },
    });
    dispatch(actions.createNewIncidentSuccess(response.data.data));
  } catch (error) {
    dispatch(actions.createNewIncidentFailure(error));
  }
};

export const fetchSingleIncident = (type, id) => async dispatch => {
  dispatch(actions.fetchSingleIncidentStart());
  try {
    const response = await axios.get(`${process.env.baseURL}/${type}/${id}`, {
      headers: { authorization: localStorage.getItem('authorization') },
    });
    dispatch(actions.fetchSingleIncidentSuccess(response.data.data));
  } catch (error) {
    dispatch(actions.fetchSingleIncidentFailure(error));
  }
};

export const editSingleIncident = (
  type,
  id,
  field,
  updatedData
) => async dispatch => {
  dispatch(actions.editIncidentStart());
  try {
    const response = await axios.patch(
      `${process.env.baseURL}/${type}/${id}/${field}`,
      updatedData,
      {
        headers: { authorization: localStorage.getItem('authorization') },
      }
    );
    dispatch(actions.editIncidentSuccess(response.data.data));
  } catch (error) {
    dispatch(actions.editIncidentFailure(error));
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
    dispatch(actions.fetchAllIncidentFailure({ error }));
  }
};
