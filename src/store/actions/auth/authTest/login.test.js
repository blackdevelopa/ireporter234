import faker from 'faker';
import axios from 'axios';
import * as actionTypes from '../../action-types';
import * as actions from '../login';
import { mockStore } from '../../../../../test/setupTests';

const payload = {
  email: faker.internet.email(),
  password: 12345,
};

const mockData = {
  data: {
    user: {
      email: faker.internet.userName(),
      token: faker.random.uuid(),
    },
  },
};

describe('login actions', () => {
  it('should create action for login start', () => {
    const expectedActions = {
      type: actionTypes.LOGIN_USER_START,
    };
    expect(actions.loginUserStart()).toEqual(expectedActions);
  });

  it('should create action for login success', () => {
    const expectedActions = {
      type: actionTypes.LOGIN_USER_SUCCESS,
      payload,
    };
    expect(actions.loginUserSuccess(payload)).toEqual(expectedActions);
  });

  it('should create action for login failure', () => {
    const expectedActions = {
      type: actionTypes.LOGIN_USER_FAILURE,
      payload,
    };
    expect(actions.loginUserFailure(payload)).toEqual(expectedActions);
  });
});

describe('async', () => {
  it('should handle login success', async () => {
    const store = mockStore({});
    const expectedActions = [
      { type: actionTypes.LOGIN_USER_START },
      { type: actionTypes.LOGIN_USER_SUCCESS, payload: mockData.data },
    ];
    await axios.post.mockResolvedValue(mockData);
    await store.dispatch(actions.loginUser(payload));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
