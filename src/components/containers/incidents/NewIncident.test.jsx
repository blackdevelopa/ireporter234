import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { MemoryRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import configMockStore from 'redux-mock-store';
import ConnectedIntervention, {
  CreateNewIntervention,
} from './NewIntervention';
import ConnectedRedflag, { CreateNewRedFlag } from './NewRedFlag';

const props = {
  createNewIncident: jest.fn(),
  newIntervention: {},
  newRedflag: {},
  history: {
    push: jest.fn(),
  },
};

const initialState = {
  isLoading: false,
  error: false,
  incident: [],
  newIncident: false,
  singleIncident: {},
  editIncident: {},
};

jest.mock('../../../redux/actions/incident/incident');
jest.mock('../../../store/');
const mockStore = configMockStore([thunk]);
const store = mockStore(initialState);

const MyContext = React.createContext();

const wrapper = mount(
  <Provider store={store} context={MyContext}>
    <Router>
      <div>
        <ConnectedIntervention context={MyContext} />
        <ConnectedRedflag context={MyContext} />
      </div>
    </Router>
  </Provider>
);

describe('<NewIncident />', () => {
  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call redflag handleOnChange', () => {
    const redflag = mount(<CreateNewRedFlag {...props} />);
    const spy = jest.spyOn(redflag.instance(), 'handleInputChange');
    const event = { target: { name: 'location', value: 'location' } };
    redflag.instance().forceUpdate();
    redflag.find('input[name="location"]').simulate('change', event);
    expect(spy).toBeCalled();
    expect(redflag.instance().state.location).toBe('location');
  });

  it('should call intervention handleOnChange', () => {
    const intervention = mount(<CreateNewIntervention {...props} />);
    const spy = jest.spyOn(intervention.instance(), 'handleInputChange');
    const event = { target: { name: 'location', value: 'location' } };
    intervention.instance().forceUpdate();
    intervention.find('input[name="location"]').simulate('change', event);
    expect(spy).toBeCalled();
    expect(intervention.instance().state.location).toBe('location');
  });

  it('should test that redflag form is submitted', () => {
    const redflag = mount(<CreateNewRedFlag {...props} />);
    const form = redflag.find('Form');
    const spy = jest.spyOn(redflag.instance(), 'handleSubmit');
    redflag.instance().forceUpdate();
    form.simulate('submit');
    expect(spy).toBeCalled();
  });

  it('should test that intervention form is submitted', () => {
    const intervention = mount(<CreateNewIntervention {...props} />);
    const form = intervention.find('Form');
    const spy = jest.spyOn(intervention.instance(), 'handleSubmit');
    intervention.instance().forceUpdate();
    form.simulate('submit');
    expect(spy).toBeCalled();
  });
});
