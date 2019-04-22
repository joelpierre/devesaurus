import React from 'react';
import { shallow } from 'enzyme';
import { StaticQuery } from 'gatsby';
import toJson from 'enzyme-to-json';

import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
} from '../../../utils/test-utilities';

import SiteInfo, { PureSiteInfo } from './SiteInfo';

const defaultProps = {};

const defaultPureProps = {
  allWordpressSiteMetadata: {
    edges: [
      {
        node: {
          name: 'test name',
          description: 'test description',
        },
      },
    ],
  },
};

/**
 * Factory function to create a ShallowWrapper for the SiteInfo component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SiteInfo {...setupProps} />);
};

const pureSetup = (props = {}) => {
  const setupProps = { ...defaultPureProps, ...props };
  return shallow(<PureSiteInfo {...setupProps} />);
};

describe('<SiteInfo/>', () => {
  let wrapper;
  let pureWrapper;

  beforeEach(() => {
    wrapper = setup();
    pureWrapper = pureSetup();
  });

  it('renders the SiteInfo Component without errors query', () => {
    const component = findByTestAttr(wrapper, 'component-site-info-query');
    expect(component.length).toBe(1);
  });

  it('renders the SiteInfo Component without errors info', () => {
    const component = findByTestAttr(pureWrapper, 'component-site-info');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(SiteInfo, defaultProps);
  });

  it('should render with correct props', () => {
    checkProps(PureSiteInfo, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });

  it('should match snapshot', () => {
    matchSnapshot(pureWrapper);
  });
});
