import * as actionTypes from '../../../actions/action-types';
import errorReducer from '../../errorReducers';
import register from '../register';

const initState = {
  isLoading: false,
  response: null,
  error: null,
  success: null,
};

describe('register reducer', () => {
  it('should update state on register successful', () => {
    const payload = {
      username: 'sdfgg',
      email: 'dh@hm.com',
      password: '12345678',
    };
    const newState = register(initState, {
      type: actionTypes.REGISTER_USER_SUCCESS,
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

  it('should update state on register failure', () => {
    const payload = {
      error: true,
    };
    const newState = errorReducer(initState, {
      type: actionTypes.REGISTER_USER_FAILURE,
      payload,
    });
    const expectedState = {
      error: true,
    };
    expect(newState).toEqual(expectedState);
  });
});
