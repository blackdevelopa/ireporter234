import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';

describe('landingPage', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.exists()).toBe(true);
  });
});
