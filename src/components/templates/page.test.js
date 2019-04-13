import React from 'react';
import { shallow } from 'enzyme';

import { UnconnectedPageTemplate } from './page';

const defaultProps = {
  onGetPage: jest.fn(),
  clearPageData: jest.fn(),
  pageContext: {
    title: 'test',
  },
};

/**
 * Factory function to create a ShallowWrapper for the PageTemplate component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<UnconnectedPageTemplate {...setupProps} />);
};

describe('<PageTemplate/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the PageTemplate Component without errors', () => {
    expect(wrapper).toBeTruthy();
  });
});
