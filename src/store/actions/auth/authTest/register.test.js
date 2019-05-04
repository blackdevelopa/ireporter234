import faker from 'faker';
import axios from 'axios';
import * as actionTypes from '../../action-types';
import * as actions from '../register';
import { mockStore } from '../../../../../test/setupTests';

const payload = {
  data: {
    email: faker.internet.email(),
    password: faker.random.number(),
  },
};

const mockData = {
  data: {
    data: {
      email: faker.internet.userName(),
      token: faker.random.uuid(),
    },
  },
};

const failMockData = {
  errors: {
    response: {
      data: {
        error: {
          message: 'Network Error',
        },
      },
    },
  },
};

describe('actions', () => {
  it('should create an action for register user', () => {
    const expectedAction = {
      type: actionTypes.REGISTER_USER_START,
    };
    expect(actions.registerUserStart()).toEqual(expectedAction);
  });

  it('should create an action for register success', () => {
    const expectedAction = {
      type: actionTypes.REGISTER_USER_SUCCESS,
      payload,
    };
    expect(actions.registerUserSuccess(payload)).toEqual(expectedAction);
  });

  it('should create an action for register failure', () => {
    const expectedAction = {
      type: actionTypes.REGISTER_USER_FAILURE,
      payload,
    };
    expect(actions.registerUserFailure(payload)).toEqual(expectedAction);
  });
});

describe('async', () => {
  it('should handle register failure', async () => {
    const store = mockStore({});
    const expectedAction = [
      { type: actionTypes.REGISTER_USER_START },
      {
        type: actionTypes.REGISTER_USER_FAILURE,
        payload: failMockData.errors.response.data,
      },
    ];

    await axios.post.mockRejectedValue(failMockData.error);

    return store.dispatch(actions.registerUser({})).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should handle register success', async () => {
    const store = mockStore({});
    const expectedAction = [
      { type: actionTypes.REGISTER_USER_START },
      { type: actionTypes.REGISTER_USER_SUCCESS, payload: mockData.data },
    ];

    await axios.post.mockResolvedValue(mockData);
    return store.dispatch(actions.registerUser(payload.data)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });
});
