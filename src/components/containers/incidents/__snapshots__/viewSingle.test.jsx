import React from 'react';
import { shallow } from 'enzyme';
import ViewCard from '../SingleIncidentView';

const props = {
  data: [
    {
      id: 11,
      createdon: '2019-05-01T00:00:00.000Z',
      createdby: 19,
      type: 'redflag',
      location: 'Umuahia',
      status: 'draft',
      images: 'https://picsum.photos/id/170/200/300',
      videos: null,
      comment: 'This is a redflag that happened in Umuahia',
    },
  ],
  type: 'intervention',
};

describe('<ViewSingle />', () => {
  const wrapper = shallow(<ViewCard {...props} />);
  it('should render without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
