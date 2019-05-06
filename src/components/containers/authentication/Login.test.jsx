import React from 'react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import configMockStore from 'redux-mock-store';
// import { Form, Button } from 'semantic-ui-react';
import ConnectedLogin, { LoginForm } from './Login';
// import authReducer from '../../../redux/actions/auth/login';

const props = {
  loginUser: jest.fn(),
  history: {
    push: jest.fn(),
  },
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

jest.mock('../../../redux/actions/auth/login');
jest.mock('../../../store/');
const mockStore = configMockStore([thunk]);
const store = mockStore(initialState);

const MyContext = React.createContext();

const wrapper = mount(
  <Provider store={store} context={MyContext}>
    <Router>
      <ConnectedLogin context={MyContext} />
    </Router>
  </Provider>
);

describe('<Login> ', () => {
  it('should render without login component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should test that form is submitted', () => {
    const loginForm = mount(<LoginForm {...props} />);
    const form = loginForm.find('Form');
    const spy = jest.spyOn(loginForm.instance(), 'handleSubmit');
    loginForm.instance().forceUpdate();
    form.simulate('submit');
    expect(spy).toBeCalled();
  });

  it('should render two form inputs', () => {
    const loginForm = mount(<LoginForm {...props} />);
    const form = loginForm.find('input');
    expect(form).toHaveLength(2);
  });

  it('should call handleOnchange', () => {
    const loginForm = mount(<LoginForm {...props} />);
    const spy = jest.spyOn(loginForm.instance(), 'onChange');
    const event = { target: { name: 'email', value: 'my@email.com' } };
    loginForm.instance().forceUpdate();
    loginForm.find('input[name="email"]').simulate('change', event);
    expect(spy).toBeCalled();
    expect(loginForm.instance().state.email).toBe('my@email.com');
  });

  it('should redirect to "/redflags if isAuthenticated is true"', () => {
    const loginForm = mount(<LoginForm {...props} />);
    loginForm.setProps({ isAuthenticated: true });
    expect(loginForm.props().history.push).toBeCalledWith('/red-flags');
  });
});
