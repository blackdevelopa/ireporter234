import faker from 'faker';
import axios from 'axios';
import configMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as actionTypes from '../../action-types';
import * as actions from '../register';

jest.mock('axios');
const mockStore = configMockStore([thunk]);
configure({ adapter: new Adapter() });

const payload = {
  data: {
    email: faker.internet.email(),
    password: faker.random.number(),
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

describe('registerActions', () => {
  it('have an intial state', () => {
    const expectedAction = {
      type: actionTypes.REGISTER_USER_START,
    };
    expect(actions.registerUserStart()).toEqual(expectedAction);
  });

  it('should return an action on register success', () => {
    const expectedAction = {
      type: actionTypes.REGISTER_USER_SUCCESS,
      payload,
    };
    expect(actions.registerUserSuccess(payload)).toEqual(expectedAction);
  });

  it('should return an error on register failure', () => {
    const expectedAction = {
      type: actionTypes.REGISTER_USER_FAILURE,
      payload,
    };
    expect(actions.registerUserFailure(payload)).toEqual(expectedAction);
  });
});

describe('async', () => {
  it('should return an error on register failure', async () => {
    const store = mockStore({});
    const expectedAction = [
      { type: actionTypes.REGISTER_USER_START },
      {
        type: actionTypes.REGISTER_USER_FAILURE,
      },
    ];

    await axios.post.mockRejectedValue(failMockData.error);

    await store.dispatch(actions.registerUser());
    expect(store.getActions()).toEqual(expectedAction);
  });
});
