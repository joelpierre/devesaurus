import { updateObject } from '../../utils';
import { wordActionTypes } from '../actionTypes';

/**
 * Set initial state
 * @type {{data: any}}
 */
const initialState = {};

/**
 * Set Word data state
 * @param state
 * @param action
 */
const setWordData = (state, action) => {
  return updateObject(state, {
    ...action.data,
  });
};

/**
 * Clear the current word data
 * @param state
 */
const clearWordData = state => {
  return updateObject(state, {});
};

/**
 * Set the new state or return the current state as default
 * @param state
 * @param action
 * @returns {{data: any}}
 */
const wordReducer = (state = initialState, action) => {
  switch (action.type) {
    case wordActionTypes.SET_WORD_DATA:
      return setWordData(state, action);

    case wordActionTypes.CLEAR_WORD_DATA:
      return clearWordData(state, action);

    default:
      return state;
  }
};

export default wordReducer;
