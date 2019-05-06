import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import configMockStore from 'redux-mock-store';
import ConnectedRegister, { RegisterForm } from './Register';

const props = {
  history: {
    push: jest.fn(),
  },
  registerUser: jest.fn(),
  isAuthenticated: false,
};

const initialState = {
  isLoading: false,
  success: false,
  error: false,
  auth: {
    isAuthenticated: false,
  },
};

jest.mock('../../../redux/actions/auth/register');
jest.mock('../../../store/');
const mockStore = configMockStore([thunk]);
const store = mockStore(initialState);

const MyContext = React.createContext();

const wrapper = mount(
  <Provider store={store} context={MyContext}>
    <Router>
      <ConnectedRegister context={MyContext} />
    </Router>
  </Provider>
);

describe('<Register /> rendering', () => {
  it('should render without', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should rener when the form is submitted', () => {
    const registerForm = mount(<RegisterForm {...props} />);
    const form = registerForm.find('Form');
    const spy = jest.spyOn(registerForm.instance(), 'handleSubmit');
    registerForm.instance().forceUpdate();
    form.simulate('submit');
    expect(spy).toBeCalled();
  });

  it('should handle onchange', () => {
    const registerForm = mount(<RegisterForm {...props} />);
    const event = { target: { name: 'email', value: 'fakeremail@gmail.com' } };
    const spy = jest.spyOn(registerForm.instance(), 'onChange');
    registerForm.instance().forceUpdate();
    registerForm.find('input[name="email"]').simulate('change', event);
    expect(spy).toBeCalled();
    expect(registerForm.instance().state.email).toBe('fakeremail@gmail.com');
  });

  it('should render when the form is submitted', () => {
    const registerForm = mount(<RegisterForm {...props} />);
    const form = registerForm.find('input');
    expect(form).toHaveLength(4);
  });

  it('should render when redirect when form is submitted', () => {
    const registerForm = mount(<RegisterForm {...props} />);
    registerForm.setProps({ isAuthenticated: true });
    expect(registerForm.props().history.push).toBeCalledWith('/red-flags');
  });
});
