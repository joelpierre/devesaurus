import React from 'react';
import { shallow } from 'enzyme';
import { StaticQuery } from 'gatsby';
import toJson from 'enzyme-to-json';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import TermsMenu, { PureTermsMenu } from './TermsMenu';

const defaultProps = {};

const defaultPureProps = {
  allWordpressWpApiMenusMenusItems: {
    edges: [
      {
        node: {
          items: [
            {
              order: '1',
              title: 'title',
              object_slug: 'slug',
              attr: 'attr',
              classes: 'classes',
              url: 'url',
            },
          ],
        },
      },
    ],
  },
};

/**
 * Factory function to create a ShallowWrapper for the TermsMenu component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<TermsMenu {...setupProps} />);
};

const pureSetup = (props = {}) => {
  const setupProps = { ...defaultPureProps, ...props };
  return shallow(<PureTermsMenu {...setupProps} />);
};

describe('<TermsMenu/>', () => {
  let wrapper;
  let pureWrapper;

  beforeEach(() => {
    wrapper = setup();
    pureWrapper = pureSetup();
  });

  it('renders the TermsMenu Component without errors query', () => {
    const component = findByTestAttr(wrapper, 'component-terms-menu-query');
    expect(component.length).toBe(1);
  });

  it('renders the TermsMenu Component without errors', () => {
    const component = findByTestAttr(pureWrapper, 'component-terms-menu');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(TermsMenu, defaultProps);
  });

  it('should render with correct props', () => {
    checkProps(PureTermsMenu, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });

  it('should match snapshot', () => {
    matchSnapshot(pureWrapper);
  });
});
