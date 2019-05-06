import * as actionTypes from '../../actions/action-types';
import authReducer from './auth';

const initialState = {
  isLoading: false,
  success: false,
  error: false,
  isAuthenticated: false,
  user: null,
};

describe('auth reducer', () => {
  const payload = {
    email: 'dh@hm.com',
    password: '12345678',
  };

  it('should return initial state', () => {
    expect(authReducer(initialState, {})).toEqual(initialState);
  });

  it('should update state on login successful', () => {
    expect(
      authReducer(initialState, {
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

  it('should update state on register successful', () => {
    expect(
      authReducer(initialState, {
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

  it('should update state on login failure', () => {
    expect(
      authReducer(initialState, {
        type: actionTypes.LOGIN_USER_FAILURE,
        payload,
      })
    ).toEqual({
      ...initialState,
      isAuthenticated: false,
      error: true,
    });
  });

  it('should update state on register failure', () => {
    expect(
      authReducer(initialState, {
        type: actionTypes.REGISTER_USER_FAILURE,
        payload,
      })
    ).toEqual({
      ...initialState,
      isAuthenticated: false,
      error: true,
    });
  });

  it('should update state on auth error', () => {
    expect(
      authReducer(initialState, {
        type: actionTypes.CLEAR_AUTH_ERRORS,
      })
    ).toEqual({
      ...initialState,
      error: false,
    });
  });
});
