import React from 'react';
import { shallow } from 'enzyme';
import { StaticQuery } from 'gatsby';
import toJson from 'enzyme-to-json';

import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
} from '../../../utils/test-utilities';

import PrimaryMenu, { PurePrimaryMenu } from './PrimaryMenu';

const defaultProps = {};

const defaultPureProps = {
  allWordpressWpApiMenusMenusItems: {
    edges: [
      {
        node: {
          items: [
            {
              title: 'title',
              object_slug: 'slug',
            },
          ],
        },
      },
    ],
  },
};

/**
 * Factory function to create a ShallowWrapper for the PrimaryMenu component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<PrimaryMenu {...setupProps} />);
};

const pureSetup = (props = {}) => {
  const setupProps = { ...defaultPureProps, ...props };
  return shallow(<PurePrimaryMenu {...setupProps} />);
};

describe('<PrimaryMenu/>', () => {
  let wrapper;
  let pureWrapper;

  beforeEach(() => {
    wrapper = setup();
    pureWrapper = pureSetup();
  });

  it('renders the PrimaryMenu Component without errors', () => {
    const component = findByTestAttr(wrapper, 'component-primary-menu-query');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(PrimaryMenu, defaultProps);
  });

  it('should render with correct props', () => {
    checkProps(PurePrimaryMenu, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });

  it('should match snapshot', () => {
    matchSnapshot(pureWrapper);
  });
});
