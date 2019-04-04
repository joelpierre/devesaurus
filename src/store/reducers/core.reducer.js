import { updateObject } from '../../utils';
import { coreActionTypes } from '../actionTypes';

/**
 * Set the initial core state
 * @type {{site: string, options: null, description: string, api: string, title: string, loading: boolean, error: boolean}}
 */
export const initialState = {
  title: 'Store Title',
  description: 'Store Description',
  api: process.env.GATSBY_BASE_URL,
  site: process.env.GATSBY_SITE_URL,
  loading: false,
  error: false,
  options: null,
};

/**
 * Set Site Meta Reducer
 * @param state
 * @param action
 */
const setSiteMeta = (state, action) => {
  return updateObject(state, {
    title: action.data.name,
    description: action.data.description,
  });
};

/**
 * Set Site Options Reducer
 * @param state
 * @param action
 */
const setSiteOptions = (state, action) => {
  return updateObject(state, {
    options: action.data,
  });
};

/**
 * Set the new state or return the current state as default
 * @param state
 * @param action
 * @returns {{site: string, options: null, description: string, api: string, title: string, loading: boolean, error: boolean}}
 */
const coreReducer = (state = initialState, action) => {
  switch (action.type) {

    case coreActionTypes.SET_SITE_META:
      return setSiteMeta(state, action);

    case coreActionTypes.SET_SITE_OPTIONS:
      return setSiteOptions(state, action);

    default:
      return state;
  }
};

export default coreReducer;
