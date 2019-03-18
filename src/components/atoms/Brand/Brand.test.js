import React from 'react';
import { configure, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Brand from './Brand';

configure({ adapter: new Adapter() });

describe('<Brand/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Brand/>,
    );
  });

  it('Should render Brand Component', () => {
    expect(wrapper)
      .toMatchSnapshot();
  });

  it('Should pass props and render them', () => {
    wrapper.setProps({
      classes: 'wrapper__brand',
      heading: 'Joel Test Heading',
      slogan: 'Joel Test Slogan',
    });

    expect(wrapper.hasClass('wrapper__brand'))
      .toEqual(true);

    expect(wrapper.find('h1')
      .text())
      .toEqual('Joel Test Heading');

    expect(wrapper.find('p')
      .text())
      .toEqual('Joel Test Slogan');
  });

});
