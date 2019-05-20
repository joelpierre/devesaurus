import React from 'react';
import { shallow } from 'enzyme/build';

import ConnectedArchiveTemplate, { ArchiveTemplate } from './ArchiveTemplate';
import { checkProps, findByTestAttr, matchSnapshot } from '../../utils/test';

const defaultProps = {
  pageContext: {
    name: 'test',
    slug: 'test-slug',
    taxonomy: 'test-taxonomy',
  },
  isMenuOpen: false,
  setMenuState: jest.fn(),
};

/**
 * Factory function to create a ShallowWrapper for the ArchiveTemplate component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<ArchiveTemplate {...setupProps} />);
};

describe('<ArchiveTemplate/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('renders the ArchiveTemplate Component without errors', () => {
    const template = findByTestAttr(wrapper, 'template-archive');
    expect(template).toBeTruthy();
    expect(template.length).toBe(1);
  });

  it('should render with correct props', () => {
    checkProps(ArchiveTemplate, defaultProps);
  });

  it('should match snapshot', () => {
    matchSnapshot(wrapper);
  });
});
