import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
} from '../../../utils/test-utilities';

import TermsMenu from './TermsMenu';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the TermsMenu component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TermsMenu {...setupProps} />);
};

describe('<TermsMenu/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the TermsMenu Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-terms-menu');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(TermsMenu, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
