/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import withProvider from './src/hoc/withProvider';

require('flexigridcss/dist/flexigridcss.css');

export const wrapRootElement = withProvider;
