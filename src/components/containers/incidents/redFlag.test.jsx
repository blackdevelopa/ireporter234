import React from 'react';
import { shallow } from 'enzyme';
import { Redflag } from './RedFlag';

const props = {
  fetchAllIncident: jest.fn(),
  redflag: {},
};

describe('<RedflagPage />', () => {
  const wrapper = shallow(<Redflag {...props} />);
  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
