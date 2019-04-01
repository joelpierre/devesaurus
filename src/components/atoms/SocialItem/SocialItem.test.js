import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SocialItem from './SocialItem';

configure({ adapter: new Adapter() });

describe('<SocialItem/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SocialItem/>,
    );
  });

  it('Should render SocialItem Component', () => {
    // expect(wrapper)
  });

});
