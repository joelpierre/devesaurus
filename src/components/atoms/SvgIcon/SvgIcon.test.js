import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SvgIcon from './SvgIcon';

configure({ adapter: new Adapter() });

describe('<SvgIcon/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SvgIcon classes={`test-class`} name={`codepen`}/>,
    );
  });

  it('Should render SvgIcon Component', () => {
    expect(wrapper)
      .toMatchSnapshot();
  });

});
