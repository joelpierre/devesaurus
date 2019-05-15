import React from 'react';
import { shallow } from 'enzyme';

import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

import LabelCloud from './LabelCloud';

const defaultProps = {
  taxonomy: 'word_tag',
};

/**
 * Factory function to create a ShallowWrapper for the LabelCloud component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<LabelCloud {...setupProps} />);
};

describe('<LabelCloud/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('should render with correct props', () => {
    checkProps(LabelCloud, defaultProps);
  });

  it('should match snapshot taxonomy:word_tag', () => {
    wrapper = setup({ taxonomy: 'word_tag' });
    matchSnapshot(wrapper);
  });

  it('should match snapshot taxonomy:category', () => {
    wrapper = setup({ taxonomy: 'category' });
    matchSnapshot(wrapper);
  });

  it('should match snapshot taxonomy:post_tag', () => {
    wrapper = setup({ taxonomy: 'post_tag' });
    matchSnapshot(wrapper);
  });

  it('should match snapshot taxonomy:word_category', () => {
    wrapper = setup({ taxonomy: 'word_category' });
    matchSnapshot(wrapper);
  });
});
