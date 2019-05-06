import thunk from 'redux-thunk';
import dotenv from 'dotenv';
import { configure } from 'enzyme';
import faker from 'faker';
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';
import configMockStore from 'redux-mock-store';
import * as actionTypes from '../../action-types';
import * as actions from '../login';

dotenv.config();
jest.mock('axios');
const mockStore = configMockStore([thunk]);
configure({ adapter: new Adapter() });

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
    axios.post.mockResolvedValue(mockData);
    await store.dispatch(actions.loginUser(payload));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
