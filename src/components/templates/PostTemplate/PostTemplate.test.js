import React from 'react';
import { shallow } from 'enzyme/build';

import ConnectedPostTemplate, { PostTemplate } from './PostTemplate';
import {
  checkProps,
  findByTestAttr,
  matchSnapshot,
} from '../../../utils/test-utilities';

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
    slug: 'test-slug',
    yoast_meta: {
      yoast_wpseo_metadesc: '',
    },
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

  it('should render PostTemplate', () => {
    const template = findByTestAttr(wrapper, 'template-post');
    expect(template).toBeTruthy();
    expect(template.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(PostTemplate, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
