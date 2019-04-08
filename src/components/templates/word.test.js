import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { UnconnectedWordTemplate } from './word';

const defaultProps = {
  onGetWord: () => {},
  clearWordData: () => {},
  onGetSiteMeta: () => {},
};

/**
 * Factory function to create a ShallowWrapper for the WordTemplate component.
 * @param {object} props - Component props specific to setup
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<UnconnectedWordTemplate {...setupProps} />);
};

describe('<WordTemplate/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  it('Renders the WordTemplate Component without errors', () => {
    expect(wrapper).toBeTruthy();
  });
});
