import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
} from '../../../utils/test-utilities';

import SocialItem from './SocialItem';

const defaultProps = {
  name: 'test-name',
  link: 'test-link',
};

/**
 * Factory function to create a ShallowWrapper for the SocialItem component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SocialItem {...setupProps} />);
};

describe('<SocialItem/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the SocialItem Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-social-item');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(SocialItem, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
