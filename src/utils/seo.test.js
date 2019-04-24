import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import SEO, { PureSEO } from './SEO';
import { checkProps, findByTestAttr, matchSnapshot } from './test-utilities';

const defaultProps = {
  title: 'test title',
  keywords: [],
};

const defaultPureProps = {
  title: 'test title',
  keywords: [],
  data: {
    site: {
      siteMetadata: {
        description: 'Some description',
      },
    },
  },
};

/**
 * Factory function to create a ShallowWrapper for the SEO component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SEO {...setupProps} />);
};

/**
 * Factory function to create a ShallowWrapper for the PureSEO component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const pureSetup = (props = {}) => {
  const setupProps = { ...defaultPureProps, ...props };
  return shallow(<PureSEO {...setupProps} />);
};

describe('<SEO/>', () => {
  let wrapper;
  let pureWrapper;

  beforeEach(() => {
    wrapper = setup();
    pureWrapper = pureSetup();
  });

  it('renders the PureSEO Component without errors', () => {
    const component = findByTestAttr(pureWrapper, 'seo-helmet');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(SEO, defaultProps);
  });

  it('should match snapshot SEO', () => {
    matchSnapshot(wrapper);
  });

  it('should match snapshot PureSEO', () => {
    matchSnapshot(pureWrapper);
  });
});
