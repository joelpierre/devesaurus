import React from 'react';
import { shallow } from 'enzyme';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import FooterMenu, { PureFooterMenu } from './FooterMenu';

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
              url: 'url',
              classes: 'test-class',
              attr: 'attr',
            },
          ],
        },
      },
    ],
  },
};

/**
 * Factory function to create a ShallowWrapper for the FooterMenu component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<FooterMenu {...setupProps} />);
};

const pureSetup = (props = {}) => {
  const setupProps = { ...defaultPureProps, ...props };
  return shallow(<PureFooterMenu {...setupProps} />);
};

describe('<FooterMenu/>', () => {
  let wrapper;
  let pureWrapper;

  beforeEach(() => {
    wrapper = setup();
    pureWrapper = pureSetup();
  });

  it('renders the FooterMenu Component without errors query', () => {
    const component = findByTestAttr(wrapper, 'component-footer-menu-query');
    expect(component.length).toBe(1);
  });

  it('renders the FooterMenu Component without errors', () => {
    const component = findByTestAttr(pureWrapper, 'component-footer-menu');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(FooterMenu, defaultProps);
  });

  it('should render with correct props', () => {
    checkProps(PureFooterMenu, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });

  it('should match snapshot', () => {
    matchSnapshot(pureWrapper);
  });
});
