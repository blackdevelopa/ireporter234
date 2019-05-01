import * as actionTypes from '../../../actions/action-types';
import redflagReducer from '../redflag';

const initialState = {
  isLoading: false,
  success: false,
  error: false,
  redflag: {},
};

describe('redflag reducer', () => {
  const payload = {
    location: 'Abuja',
    images: 'https://picsum.photos/200/300',
    comment: 'This is a test comment',
  };

  it('should return initial state', () => {
    expect(redflagReducer(initialState, {})).toEqual(initialState);
  });

  it('should update state on redflag successful', () => {
    expect(
      redflagReducer(initialState, {
        type: actionTypes.FETCH_INCIDENT_SUCCESS,
        payload,
      })
    ).toEqual({
      ...initialState,
      redflag: { ...payload },
    });
  });

  it('should update state on redflag failure', () => {
    expect(
      redflagReducer(initialState, {
        type: actionTypes.FETCH_INCIDENT_FAILURE,
        payload,
      })
    ).toEqual({
      ...initialState,
      error: true,
    });
  });
});
