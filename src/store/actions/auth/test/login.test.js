import faker from 'faker';
import * as actionTypes from '../../action-types';
import * as actions from '../login';

const payload = {
  email: faker.internet.userName(),
  password: '12345678',
};

// const mockData = {
//   data: {
//     user: {
//       email: faker.internet.userName(),
//       token: faker.random.uuid(),
//     },
//   },
// };

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
    expect(actions.loginUserSuccess(payload).toEqual(expectedActions));
  });
});
