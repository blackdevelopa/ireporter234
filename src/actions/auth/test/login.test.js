import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER,
} from '../../action-types';

import login from '../login';

const mockStore = configureMockStore([thunk]);
const mock = new MockAdapter(axios);

const user = {
  email: 'dh@hm.com',
  password: '12345678',
};

describe('login actions', () => {
  afterEach(() => {
    mock.reset();
  });

  it('logs a user successfully', () => {
    mock
      .onPost(`https://ireporter234.herokuapp.com/api/v1/auth/login`)
      .reply(201, {
        user,
      });
    const expectedActions = [
      { type: LOGIN_USER },
      { type: LOGIN_USER_SUCCESS, payload: { user } },
    ];
    const store = mockStore({ login: {} });
    return store.dispatch(
      login().then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    );
  });

  it('does not logs a user successfully', () => {
    mock
      .onPost(`https://ireporter234.herokuapp.com/api/v1/auth/login`)
      .reply(400, {
        error: null,
      });
    const expectedActions = [
      { type: LOGIN_USER },
      { type: LOGIN_USER_FAILURE, payload: { error: null } },
    ];
    const store = mockStore({ login: {} });
    return store.dispatch(
      login().catch(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    );
  });
});
