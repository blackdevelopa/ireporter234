import * as actionTypes from '../../../actions/action-types';
import interventionReducer from '../intervention';

const initialState = {
  isLoading: false,
  success: false,
  error: false,
  intervention: {},
};

describe('intervention reducer', () => {
  const payload = {
    location: 'Abuja',
    images: 'https://picsum.photos/200/300',
    comment: 'This is a test comment',
  };

  it('should return initial state', () => {
    expect(interventionReducer(initialState, {})).toEqual(initialState);
  });

  it('should update state on intervention successful', () => {
    expect(
      interventionReducer(initialState, {
        type: actionTypes.FETCH_INCIDENT_SUCCESS,
        payload,
      })
    ).toEqual({
      ...initialState,
      intervention: { ...payload },
    });
  });

  it('should update state on intervention failure', () => {
    expect(
      interventionReducer(initialState, {
        type: actionTypes.FETCH_INCIDENT_FAILURE,
        payload,
      })
    ).toEqual({
      ...initialState,
      error: true,
    });
  });
});
