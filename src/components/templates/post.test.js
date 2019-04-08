import React from 'react';
import { shallow } from 'enzyme';

import { UnconnectedPostTemplate } from './post';

const defaultProps = {
  onGetPost: () => {},
  clearPostData: () => {},
  onGetSiteMeta: () => {},
};

/**
 * Factory function to create a ShallowWrapper for the PostTemplate component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<UnconnectedPostTemplate {...setupProps} />);
};

describe('<PostTemplate/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the PostTemplate Component without errors', () => {
    expect(wrapper).toBeTruthy();
  });
});
