import React from 'react';
import Brand from './Brand';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../../utils/test-utilities';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper fro the App component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Brand {...setupProps} />);
};

describe('<Brand/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Should render Brand Component', () => {
    const component = findByTestAttr(wrapper, 'component-brand');
    expect(component).toBeTruthy();
    expect(component.length).toBe(1);
  });

  it('Should pass props and render them', () => {
    wrapper.setProps({
      classes: 'wrapper__brand',
      heading: 'Joel Test Heading',
      slogan: 'Joel Test Slogan',
    });

    expect(wrapper.hasClass('wrapper__brand')).toEqual(true);

    expect(wrapper.find('h1').text()).toEqual('Joel Test Heading');

    expect(wrapper.find('p').text()).toEqual('Joel Test Slogan');
  });
});
