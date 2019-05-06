import * as actionTypes from '../../actions/action-types';
import incident from './incident';

const initialState = {
  isLoading: false,
  success: false,
  error: false,
  incident: {},
};

describe('incident reducer', () => {
  const payload = [
    {
      location: 'Abuja',
      images: 'https://picsum.photos/200/300',
      comment: 'This is a test comment',
    },
  ];

  it('should return initial state', () => {
    expect(incident(initialState, {})).toEqual(initialState);
  });

  it('should update state on fetch all incident successful', () => {
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

  it('should update state on fetch all incident failure', () => {
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

  it('should update state on fetch single incident success', () => {
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

  it('should update state on fetch single incident failure', () => {
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

  it('should update state on create new incident successful', () => {
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

  it('should update state on create new incident failure', () => {
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
