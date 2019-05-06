import React from 'react';
import { shallow } from 'enzyme';
import LandingPage from './LandingPage';

describe('Landing page', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<LandingPage />);
    expect(wrapper.exists()).toBe(true);
  });
});
