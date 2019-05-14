import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import SocialMenu, { PureSocialMenu } from './SocialMenu';

const defaultProps = {};

const defaultPureProps = {
  allWordpressAcfOptions: {
    edges: [
      {
        node: {
          options: {
            facebook: 'facebook',
            twitter: 'twitter',
            instagram: 'instagram',
            linkedin: 'linkedin',
          },
        },
      },
    ],
  },
};

/**
 * Factory function to create a ShallowWrapper for the SocialMenu component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<SocialMenu {...setupProps} />);
};

const pureSetup = (props = {}) => {
  const setupProps = { ...defaultPureProps, ...props };
  return shallow(<PureSocialMenu {...setupProps} />);
};

describe('<PureSocialMenu/>', () => {
  let wrapper;
  let pureWrapper;

  beforeEach(() => {
    wrapper = setup();
    pureWrapper = pureSetup();
  });

  it('renders the PureSocialMenu Component without errors', () => {
    const component = findByTestAttr(pureWrapper, 'component-social-menu');
    expect(component.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(PureSocialMenu, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(pureWrapper);
  });
});
