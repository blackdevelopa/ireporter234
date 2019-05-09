import * as actionTypes from '../../actions/action-types';
import incident from './incident';

const initialState = {
  isLoading: false,
  success: false,
  error: false,
  incident: {},
};

describe('incidentReducer', () => {
  const payload = [
    {
      location: 'Abuja',
      images: 'https://picsum.photos/200/300',
      comment: 'This is a test comment',
    },
  ];

  it('should have an initial state', () => {
    expect(incident(initialState, {})).toEqual(initialState);
  });

  it('should return start on fetch all start', () => {
    expect(
      incident(initialState, {
        type: actionTypes.FETCH_ALL_INCIDENT_START,
      })
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should return all interventions on fetch all success', () => {
    expect(
      incident(initialState, {
        type: actionTypes.FETCH_ALL_INCIDENT_SUCCESS_INTERVENTIONS,
        ...payload,
      })
    ).toEqual({
      ...initialState,
      incident: { ...payload.data },
    });
  });

  it('should return an error on fetch all failure', () => {
    expect(
      incident(initialState, {
        type: actionTypes.FETCH_ALL_INCIDENT_FAILURE,
        payload,
      })
    ).toEqual({
      ...initialState,
      error: true,
    });
  });

  it('should return start on fetch single start', () => {
    expect(
      incident(initialState, {
        type: actionTypes.FETCH_SINGLE_INCIDENT_START,
      })
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should return single incident on fetch single success', () => {
    expect(
      incident(initialState, {
        type: actionTypes.FETCH_SINGLE_INCIDENT_SUCCESS,
        payload,
      })
    ).toEqual({
      ...initialState,
      success: true,
      singleIncident: payload,
    });
  });

  it('should return an error on fetch single failure', () => {
    expect(
      incident(initialState, {
        type: actionTypes.FETCH_SINGLE_INCIDENT_FAILURE,
        payload,
      })
    ).toEqual({
      ...initialState,
      error: true,
    });
  });

  it('should return edited incident on edit single success', () => {
    expect(
      incident(initialState, {
        type: actionTypes.EDIT_INCIDENT_SUCCESS,
        payload,
      })
    ).toEqual({
      ...initialState,
      success: true,
      editIncident: payload,
    });
  });

  it('should return start on edit single start', () => {
    expect(
      incident(initialState, {
        type: actionTypes.EDIT_INCIDENT_START,
      })
    ).toEqual({
      ...initialState,
      isLoading: true,
    });
  });

  it('should return an error on edit single failure', () => {
    expect(
      incident(initialState, {
        type: actionTypes.EDIT_INCIDENT_FAILURE,
        payload,
      })
    ).toEqual({
      ...initialState,
      error: true,
    });
  });

  it('should create an incident on create new incident success', () => {
    expect(
      incident(initialState, {
        type: actionTypes.CREATE_NEW_INCIDENT_SUCCESS,
        payload,
      })
    ).toEqual({
      ...initialState,
      success: true,
      newIncident: payload,
    });
  });

  it('should return an error on create new incident failure', () => {
    expect(
      incident(initialState, {
        type: actionTypes.CREATE_NEW_INCIDENT_FAILURE,
        payload,
      })
    ).toEqual({
      ...initialState,
      error: true,
    });
  });
});
