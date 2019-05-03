import * as actionTypes from '../../../actions/action-types';
import loginReducer from '../login';

const initialState = {
  isLoading: false,
  success: false,
  error: false,
  isAuthenticated: false,
  response: null,
};

describe('login reducer', () => {
  const payload = {
    email: 'dh@hm.com',
    password: '12345678',
  };

  it('should return initial state', () => {
    expect(loginReducer(initialState, {})).toEqual(initialState);
  });

  it('should update state on login successful', () => {
    expect(
      loginReducer(initialState, {
        type: actionTypes.LOGIN_USER_SUCCESS,
        payload,
      })
    ).toEqual({
      ...initialState,
      success: true,
      isAuthenticated: true,
      user: payload,
    });
  });

  it('should update state on login failure', () => {
    expect(
      loginReducer(initialState, {
        type: actionTypes.LOGIN_USER_FAILURE,
        payload,
      })
    ).toEqual({
      ...initialState,
      isAuthenticated: false,
      error: true,
    });
  });
});
