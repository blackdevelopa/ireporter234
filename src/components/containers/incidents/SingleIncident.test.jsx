import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import configMockStore from 'redux-mock-store';
import ConnectedSingleIntervention, {
  SingleIntervention,
} from './SingleIntervention';
import ConnectedSingleRedflag, { SingleRedFlag } from './SingleRedFlag';

const props = {
  interventionInfo: {},
  isLoading: true,
  match: {
    params: {
      id: 10,
    },
  },
  fetchSingleIncident: jest.fn(),
  singleIntervention: {},
  singleRedflag: {},
};

const initialState = {
  isLoading: false,
  success: false,
  error: false,
  incident: {
    singleIncident: {},
  },
  auth: {
    isAuthenticated: false,
  },
};

jest.mock('../../../redux/actions/auth/login');
jest.mock('../../../store/');
const mockStore = configMockStore([thunk]);
const store = mockStore(initialState);

const MyContext = React.createContext();

const connectedWrapper = mount(
  <Provider store={store} context={MyContext}>
    <Router>
      <div>
        <ConnectedSingleIntervention context={MyContext} {...props} />
        <ConnectedSingleRedflag context={MyContext} {...props} />
      </div>
    </Router>
  </Provider>
);

describe('<Login> ', () => {
  it('should render without login component', () => {
    expect(connectedWrapper).toMatchSnapshot();
  });

  it('should render loading when "isLoading is true" ', () => {
    const interventionWrapper = mount(<SingleIntervention {...props} />);
    const redflagWrapper = mount(<SingleRedFlag {...props} />);
    expect(interventionWrapper.find('.loading')).toHaveLength(1);
    expect(redflagWrapper.find('.loading')).toHaveLength(1);
  });

  it('should should render no incidents text', () => {
    const interventionWrapper = mount(<SingleIntervention {...props} />);
    const redflagWrapper = mount(<SingleRedFlag {...props} />);
    interventionWrapper.setProps({ isLoading: false });
    redflagWrapper.setProps({ isLoading: false });
    expect(redflagWrapper.find('.loading')).toHaveLength(0);
    expect(redflagWrapper.find('.no-incidents')).toHaveLength(1);
  });

  it('should should render  single intervention', () => {
    const wrapper = mount(<SingleIntervention {...props} />);
    wrapper.setProps({ isLoading: false });
    wrapper.setProps({
      singleIntervention: {
        id: 1,
        comment: 'the comment',
        location: 'the location',
        images: 'image.png',
      },
    });
    const description = wrapper.find('.description');
    const header = wrapper.find('.header');
    expect(wrapper.find('.loading')).toHaveLength(0);
    expect(wrapper.find('.no-incidents')).toHaveLength(0);
    expect(description.text().includes('the comment')).toBe(true);
    expect(header.text().includes('the location')).toBe(true);
  });
});
