import { updateObject } from '../../utils';
import { postActionTypes } from '../actionTypes';

/**
 * Set initial state
 * @type {{data: any}}
 */
export const initialState = {};

/**
 * Set Post data state
 * @param state
 * @param action
 */
const setPostData = (state, action) => {
  return updateObject(state, {
    ...action.data,
  });
};

/**
 * Clear the current post data
 * @param state
 */
const clearPostData = state => {
  return updateObject(state, {});
};

/**
 * Set the new state or return the current state as default
 * @param state
 * @param action
 * @returns {{data: any}}
 */
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case postActionTypes.SET_POST_DATA:
      return setPostData(state, action);

    case postActionTypes.CLEAR_POST_DATA:
      return clearPostData(state, action);

    default:
      return state;
  }
};

export default postReducer;
