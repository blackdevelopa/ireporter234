import * as actionTypes from '../../../actions/action-types';
import register from '../register';

const initialState = {
  isLoading: false,
  response: null,
  error: false,
  success: false,
  isAuthenticated: false,
};

describe('register reducer', () => {
  const payload = {
    username: 'sdfgg',
    email: 'dh@hm.com',
    password: '12345678',
  };

  it('should return initial state', () => {
    expect(register(initialState, {})).toEqual(initialState);
  });

  it('should update state on register successful', () => {
    expect(
      register(initialState, {
        type: actionTypes.REGISTER_USER_SUCCESS,
        payload,
      })
    ).toEqual({
      ...initialState,
      success: true,
      isAuthenticated: true,
      user: payload,
    });
  });

  it('should update state on register failure', () => {
    expect(
      register(initialState, {
        type: actionTypes.REGISTER_USER_FAILURE,
        payload,
      })
    ).toEqual({
      ...initialState,
      isAuthenticated: false,
      error: true,
    });
  });
});
