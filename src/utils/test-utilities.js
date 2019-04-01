import checkPropTypes from 'check-prop-types';
import { applyMiddleware, createStore } from 'redux';

import rootReducer from '../store/reducers';
// import { sagaMiddleware } from '../store/configureStore';

// /**
//  * Store Factory
//  * @param initialState
//  * @returns {Store<any, Action> & *}
//  */
// export const storeFactory = (initialState) => {
//   const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
//   return createStoreWithMiddleware(rootReducer, initialState);
// };


/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} val - Value of the data-test attribute.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};


/**
 * Check the props for a component
 * @param component
 * @param conformingProps
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name,
  );
  expect(propError)
    .toBeUndefined();
};
