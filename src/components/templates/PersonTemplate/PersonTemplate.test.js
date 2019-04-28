import React from 'react';
import { shallow } from 'enzyme/build';

import ConnectedPersonTemplate, { PersonTemplate } from './PersonTemplate';
import { checkProps, findByTestAttr, matchSnapshot } from '../../../utils/test';

const defaultProps = {
  onGetPerson: jest.fn(),
  clearPersonData: jest.fn(),
  personData: {
    acf: {
      page_theme: 'brand',
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
 * Factory function to create a ShallowWrapper for the PersonTemplate component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<PersonTemplate {...setupProps} />);
};

describe('<PersonTemplate/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the PersonTemplate Component without errors', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should render PersonTemplate', () => {
    const template = findByTestAttr(wrapper, 'template-person');
    expect(template).toBeTruthy();
    expect(template.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(PersonTemplate, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
