import faker from 'faker';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as actionTypes from '../action-types';
import * as actions from './incident-actions';

jest.mock('axios');
configure({ adapter: new Adapter() });

const payload = {
  data: {
    location: faker.address.state(),
    images: faker.image.imageUrl(),
    comment: faker.lorem.sentence(),
  },
};

describe('incidentActions', () => {
  it('have an intial state for fetch all incident', () => {
    const expectedAction = {
      type: actionTypes.FETCH_ALL_INCIDENT_START,
    };
    expect(actions.fetchAllIncidentStart()).toEqual(expectedAction);
  });

  it('should return an action on fetch all incident success', () => {
    const expectedAction = {
      type: actionTypes.FETCH_ALL_REDFLAG_SUCCESS,
      payload,
    };
    expect(actions.fetchAllRedflagSuccess(payload)).toEqual(expectedAction);
  });

  it('have an intial state for fetch single incident', () => {
    const expectedAction = {
      type: actionTypes.FETCH_SINGLE_INCIDENT_START,
    };
    expect(actions.fetchSingleIncidentStart()).toEqual(expectedAction);
  });

  it('should return an action on fetch single incident success', () => {
    const expectedAction = {
      type: actionTypes.FETCH_SINGLE_INCIDENT_SUCCESS,
      payload,
    };
    expect(actions.fetchSingleIncidentSuccess(payload)).toEqual(expectedAction);
  });

  it('have an intial state for edit incident', () => {
    const expectedAction = {
      type: actionTypes.EDIT_INCIDENT_START,
    };
    expect(actions.editIncidentStart()).toEqual(expectedAction);
  });

  it('should return an action on edit incident success', () => {
    const expectedAction = {
      type: actionTypes.EDIT_INCIDENT_SUCCESS,
      payload,
    };
    expect(actions.editIncidentSuccess(payload)).toEqual(expectedAction);
  });
});
