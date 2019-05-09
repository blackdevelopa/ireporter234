import React from 'react';
import { shallow } from 'enzyme';
import { Redflag } from './RedFlag';
import { Intervention } from './Intervention';

const props = {
  fetchAllIncident: jest.fn(),
  redflag: {},
  intervention: {},
};

describe('<IncidentPage />', () => {
  const redflagWrapper = shallow(<Redflag {...props} />);
  const interventionWrapper = shallow(<Intervention {...props} />);
  it('should render without crashing', () => {
    expect(redflagWrapper).toMatchSnapshot();
    expect(interventionWrapper).toMatchSnapshot();
  });
});
