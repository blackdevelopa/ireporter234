import faker from 'faker';
import axios from 'axios';
import * as actionTypes from '../../action-types';
import * as actions from '../incident-actions';
import { mockStore } from '../../../../../test/setupTests';

const payload = {
  location: faker.address.state(),
  images: faker.image.imageUrl(),
  comment: faker.lorem.sentence(),
};

const mockData = {
  data: {
    data: {
      id: faker.random.number(),
      location: faker.address.state(),
      comment: faker.lorem.sentence(),
    },
  },
};

describe('create redflag actions', () => {
  it('should create action for redflag start', () => {
    const expectedActions = {
      type: actionTypes.CREATE_INCIDENT_START,
    };
    expect(actions.createIncidentStart()).toEqual(expectedActions);
  });

  it('should create action for redflag success', () => {
    const expectedActions = {
      type: actionTypes.CREATE_INCIDENT_SUCCESS,
    };
    expect(actions.createIncidentSuccess()).toEqual(expectedActions);
  });

  it('should create actions for redflag failure', () => {
    const expectedActions = {
      type: actionTypes.CREATE_INCIDENT_FAILURE,
    };
    expect(actions.createIncidentFailure()).toEqual(expectedActions);
  });
});

describe('async', () => {
  it('should handle redflag success', async () => {
    const store = mockStore({});
    const expectedActions = [
      { type: actionTypes.CREATE_INCIDENT_START },
      {
        type: actionTypes.CREATE_INCIDENT_SUCCESS,
        payload: mockData.data.data,
      },
    ];
    await axios.post.mockResolvedValue(mockData);
    await store.dispatch(actions.createIncidentSuccess(payload));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
