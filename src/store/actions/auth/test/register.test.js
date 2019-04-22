import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  REGISTER_USER,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
} from '../../action-types';

import register from '../register';

const mockStore = configureMockStore([thunk]);
const mock = new MockAdapter(axios);

const user = {
  username: 'sdfgg',
  email: 'dh@hm.com',
  password: '12345678',
};

describe('register actions', () => {
  afterEach(() => {
    mock.reset();
  });

  it('registers a user successfully', () => {
    mock
      .onPost(`https://ireporter234.herokuapp.com/api/v1/auth/signup`)
      .reply(200, {
        user,
      });
    const expectedActions = [
      { type: REGISTER_USER },
      { type: REGISTER_USER_SUCCESS, payload: { user } },
    ];
    const store = mockStore({ login: {} });
    return store.dispatch(
      register().then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    );
  });

  it('does not register a user successfully', () => {
    mock
      .onPost(`https://ireporter234.herokuapp.com/api/v1/auth/signup`)
      .reply(400, {
        error: null,
      });
    const expectedActions = [
      { type: REGISTER_USER },
      { type: REGISTER_USER_FAILURE, payload: { error: null } },
    ];
    const store = mockStore({ login: {} });
    return store.dispatch(
      register().catch(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    );
  });
});
