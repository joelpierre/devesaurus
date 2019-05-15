import React from 'react';
import { shallow } from 'enzyme/build';

import TagCloud, { PureTagCloud } from './TagCloud';
import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
} from '../../../../utils/test';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the TagCloud component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<PureTagCloud {...setupProps} />);
};

describe('<PureTagCloud/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the PureTagCloud Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-tag-cloud');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(PureTagCloud, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
