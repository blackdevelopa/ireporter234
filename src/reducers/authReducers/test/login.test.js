import * as actionTypes from '../../../actions/action-types';
import errorReducer from '../../errorReducers';
import login from '../login';

const initState = {
  isLoading: false,
  response: null,
  error: null,
  success: null,
};

describe('login reducer', () => {
  it('should update state on login successful', () => {
    const payload = {
      email: 'dh@hm.com',
      password: '12345678',
    };
    const newState = login(initState, {
      type: actionTypes.LOGIN_USER_SUCCESS,
      payload,
    });
    const expectedSate = {
      ...initState,
      success: true,
      isLoading: false,
      response: payload,
    };
    expect(newState).toEqual(expectedSate);
  });

  it('should update state on login failure', () => {
    const payload = {
      error: true,
    };
    const newState = errorReducer(initState, {
      type: actionTypes.SIGN_IN_FAILURE,
      payload,
    });
    const expectedState = {
      error: true,
    };
    expect(newState).toEqual(expectedState);
  });
});
