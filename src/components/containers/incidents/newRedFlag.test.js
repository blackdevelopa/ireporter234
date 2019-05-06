/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { shallow } from 'enzyme';
import NewRedflag from './NewRedFlag';

const props = {
  success: false,
  incident: {
    location: 'location',
    comment: 'comment',
  },
};

const initialState = {
  isLoading: false,
  success: false,
  redflagReducer: {},
  errors: {},
};

const mockStore = configureMockStore([thunk]);
const store = mockStore(initialState);

const connectedWrapper = shallow(
  <Provider store={store}>
    <Router>
      <NewRedflag {...props} />
    </Router>
  </Provider>
);

describe('New Redflag page', () => {
  it('should render without crashing', () => {
    expect(connectedWrapper).toMatchSnapshot();
  });
});
