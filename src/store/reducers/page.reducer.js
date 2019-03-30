import { updateObject } from '../../utils';
import { pageActionTypes } from '../actionTypes';

/**
 * Set initial state
 * @type {{data: any}}
 */
const initialState = {
  data: null,
};

/**
 * Set Page data state
 * @param state
 * @param action
 */
const setPageData = (state, action) => {
  return updateObject(state, {
    data: action.data,
  });
};

/**
 * Clear the current page data
 * @param state
 */
const clearPageData = (state) => {
  return updateObject(state, {
    data: null,
  });
};

/**
 * Set the new state or return the current state as default
 * @param state
 * @param action
 * @returns {{data: any}}
 */
const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case pageActionTypes.SET_PAGE_DATA:
      return setPageData(state, action);

    case pageActionTypes.CLEAR_PAGE_DATA:
      return clearPageData(state, action);

    default:
      return state;
  }

};

export default pageReducer;
