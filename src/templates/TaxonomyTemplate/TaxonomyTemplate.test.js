import React from 'react';
import { shallow } from 'enzyme/build';

import TaxonomyTemplate from './TaxonomyTemplate';
import { checkProps, findByTestAttr, matchSnapshot } from '../../utils/test';

const defaultProps = {
  pageContext: {
    name: 'test',
    slug: 'test-slug',
    taxonomy: 'test-taxonomy',
  },
};

/**
 * Factory function to create a ShallowWrapper for the TaxonomyTemplate component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TaxonomyTemplate {...setupProps} />);
};

describe('<TaxonomyTemplate/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the TaxonomyTemplate Component without errors', () => {
    const template = findByTestAttr(wrapper, 'template-taxonomy');
    expect(template).toBeTruthy();
    expect(template.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(TaxonomyTemplate, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
