import React from 'react';
import { shallow } from 'enzyme';

import ConnectedPostTemplate, { PostTemplate } from './PostTemplate';
import { checkProps, matchSnapshot } from '../../utils/test-utilities';

const defaultProps = {
  onGetPost: jest.fn(),
  clearPostData: jest.fn(),
  postData: {
    acf: {
      components: [{ acf_fc_layout: 'WordPressAcf_Text_Block' }],
    },
  },
  pageContext: {
    title: 'test',
  },
};

/**
 * Factory function to create a ShallowWrapper for the PostTemplate component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<PostTemplate {...setupProps} />);
};

describe('<PostTemplate/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the PostTemplate Component without errors', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render with correct props', () => {
    checkProps(PostTemplate, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
