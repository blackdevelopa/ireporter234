import thunk from 'redux-thunk';
import dotenv from 'dotenv';
import { configure } from 'enzyme';
import faker from 'faker';
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';
import configMockStore from 'redux-mock-store';
import * as actionTypes from '../action-types';
import * as actions from './incident-actions';
import * as incident from './incident';

dotenv.config();
jest.mock('axios');
const mockStore = configMockStore([thunk]);
configure({ adapter: new Adapter() });
const globalComment = faker.lorem.sentence();
const globalLocation = faker.address.state();

const payload = {
  data: {
    comment: globalComment,
    images: faker.image.imageUrl(),
    location: globalLocation,
  },
};

const mockData = {
  // incidentData: {
  data: {
    comment: globalComment,
    images: faker.image.imageUrl(),
    location: globalLocation,
  },
  // },
};

const failMockData = {
  data: {
    error: {
      message: 'Network Error',
    },
  },
};

describe('incidentActions', () => {
  it('should have an initial state', () => {
    const expectedActions = {
      type: actionTypes.CREATE_NEW_INCIDENT_START,
    };
    expect(actions.createNewIncidentStart()).toEqual(expectedActions);
  });

  it('should create an action on create new action success', () => {
    const expectedActions = {
      type: actionTypes.CREATE_NEW_INCIDENT_SUCCESS,
      payload,
    };
    expect(actions.createNewIncidentSuccess(payload)).toEqual(expectedActions);
  });

  it('should return an error on incident failure', () => {
    const expectedActions = {
      type: actionTypes.CREATE_NEW_INCIDENT_FAILURE,
      payload,
    };
    expect(actions.createNewIncidentFailure(payload)).toEqual(expectedActions);
  });
});

describe('async', () => {
  //   it('should return a dispatch on create incident success', async () => {
  //     const store = mockStore({});
  //     const expectedActions = [
  //       { type: actionTypes.CREATE_NEW_INCIDENT_START },
  //       {
  //         type: actionTypes.CREATE_NEW_INCIDENT_SUCCESS,
  //         payload: mockData.data,
  //       },
  //     ];
  //     await axios.post.mockResolvedValue(mockData);
  //     await store.dispatch(incident.createNewIncident(payload));
  //     expect(store.getActions()).toEqual(expectedActions);
  //   });
  // it('should return an error on create incident failure', async () => {
  //   const store = mockStore({});
  //   const expectedActions = [
  //     { type: actionTypes.CREATE_NEW_INCIDENT_START },
  //     {
  //       type: actionTypes.CREATE_NEW_INCIDENT_FAILURE,
  //       payload: failMockData,
  //     },
  //   ];
  //   await axios.post.mockRejectedValue(failMockData);
  //   await store.dispatch(incident.createNewIncident(payload));
  //   expect(store.getActions()).toEqual(expectedActions);
  // });
  // it('should return a dispatch on fetch all incident success', async () => {
  //   const store = mockStore({});
  //   const expectedActions = [
  //     { type: actionTypes.FETCH_ALL_INCIDENT_START },
  //     {
  //       type: actionTypes.FETCH_ALL_INCIDENT_FAILURE,
  //       payload,
  //     },
  //   ];
  //   await axios.get.mockResolvedValue(failMockData);
  //   await store.dispatch(incident.fetchAllIncident());
  //   console.log();
  //   expect(store.getActions()).toEqual(expectedActions);
  // });
});
