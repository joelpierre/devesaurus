import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MenuItem from './MenuItem';

configure({ adapter: new Adapter() });

const MockMenuItem = {
  object_slug: 'test',
  title: 'Test title',
};

describe('<MenuItem/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <MenuItem classes="test-class" item={MockMenuItem}/>,
    );
  });

  it('Should render MenuItem Component', () => {
    expect(wrapper)
      .toMatchSnapshot();
  });
});
