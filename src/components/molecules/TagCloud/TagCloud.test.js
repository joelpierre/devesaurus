import React from 'react';
import { shallow } from 'enzyme';

import TagCloud from './TagCloud';
import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

const defaultProps = {};

/**
 * Factory function to create a ShallowWrapper for the TagCloud component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TagCloud {...setupProps} />);
};

describe('<TagCloud/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the TagCloud Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-tag-cloud');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(TagCloud, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
