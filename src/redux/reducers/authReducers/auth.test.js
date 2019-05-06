import * as actionTypes from '../../actions/action-types';
import authReducer from './auth';

const initialState = {
  isLoading: false,
  success: false,
  error: false,
  isAuthenticated: false,
  user: null,
};

describe('authReducer', () => {
  const payload = {
    email: 'dh@hm.com',
    password: '12345678',
  };

  it('should have an initial state', () => {
    expect(authReducer(initialState, {})).toEqual(initialState);
  });

  it('should return a user on login success', () => {
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

  it('should return a user on register success', () => {
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

  it('should return an error on login failure', () => {
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

  it('should return an error on register failure', () => {
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

  it('should clear state after auth error', () => {
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
