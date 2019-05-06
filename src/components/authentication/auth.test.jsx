import React from 'react';
import { mount } from 'enzyme';
import Login from './Login';
import Register from './Register';

const setup = () => {
  const props = {
    modalState: jest.fn(),
  };
  const loginWrapper = mount(<Login {...props} />);
  const registerWrapper = mount(<Register {...props} />);

  return {
    props,
    loginWrapper,
    registerWrapper,
  };
};

describe('<Auth />', () => {
  it('should render self and subcomponents', () => {
    const { loginWrapper, registerWrapper } = setup();
    expect(loginWrapper.find('LoginModal').exists()).toBe(true);
    expect(registerWrapper.find('RegisterModal').exists()).toBe(true);
  });
});
