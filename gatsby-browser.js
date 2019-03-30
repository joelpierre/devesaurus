/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';
import { Provider } from 'react-redux';
import createStore from './src/store/configureStore';

require('flexigridcss/dist/flexigridcss.css');
require('./src/sass/styles.scss');

export const wrapRootElement = ({ element }) => {
  return (
    <Provider store={createStore()}>{element}</Provider>
  );
};
