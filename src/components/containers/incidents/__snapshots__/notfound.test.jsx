import React from 'react';
import { shallow } from 'enzyme';
import Notfound from '../NotFound';

describe('<NotFound >', () => {
  const wrapper = shallow(<Notfound />);
  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
