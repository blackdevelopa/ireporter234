import React from 'react';
import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import { MemoryRouter as Router } from 'react-router-dom';
import configMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ConnectedEditIncident, { EditOneIncident } from './EditIncident';

const props = {
  editSingleIncident: jest.fn(),
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
      <ConnectedEditIncident context={MyContext} />
    </Router>
  </Provider>
);

describe('<EditIncident />', () => {
  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call editIncidence for location handleOnChange', () => {
    const editIncident = mount(<EditOneIncident {...props} />);
    const spy = jest.spyOn(editIncident.instance(), 'handleInputChange');
    const event = { target: { name: 'location', value: 'location' } };
    editIncident.instance().forceUpdate();
    editIncident.find('input[name="location"]').simulate('change', event);
    expect(spy).toBeCalled();
    expect(editIncident.instance().state.location).toBe('location');
  });

  it('should test that editIncident form is submitted', () => {
    const editIncident = mount(<EditOneIncident {...props} />);
    const form = editIncident.find('Form');
    const spy = jest.spyOn(editIncident.instance(), 'handleSubmit');
    editIncident.instance().forceUpdate();
    form.simulate('submit');
    expect(spy).toBeCalled();
  });
});
