/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
import React from 'react';
import { Provider } from 'react-redux';
import createStore from './src/store/createStore';

require('flexigridcss/dist/flexigridcss.css');
require('./src/sass/styles.scss');

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={createStore()}>{element}</Provider>
  );
};
