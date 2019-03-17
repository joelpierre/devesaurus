import React from 'react';
import renderer from 'react-test-renderer';
import Brand from './Brand';
import { Provider } from 'react-redux';
import { MockStore } from '../../../../__mocks__/mock-store';


describe('<Brand/>', () => {
  it('Should render Brand component', () => {
    const component = renderer.create(
      <Provider store={MockStore}>
        <Brand/>
      </Provider>)
      .toJSON();

    expect(component)
      .toMatchSnapshot();
  });
});
