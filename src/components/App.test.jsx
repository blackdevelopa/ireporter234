import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';
import Routes from '../routes/Routes';

const wrapper = mount(<App />);
describe('<App/> rendering', () => {
  it('should render one <Routes> component', () => {
    expect(wrapper.find(Routes)).toHaveLength(1);
  });
  it('matches the snapshot', () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
