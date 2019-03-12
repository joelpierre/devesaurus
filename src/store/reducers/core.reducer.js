import * as actionTypes from '../actionTypes/core.actionTypes';
import { updateObject } from '../../utilities';

const initialState = {
  title: 'Store Title',
  description: 'Store Description',
  api: process.env.GATSBY_BASE_URL,
  site: process.env.GATSBY_SITE_URL,
  loading: false,
  error: false,
};

const getSiteMeta = (state, action) => {
  return updateObject(state, {
    title: action.title,
    description: action.description,
  });
};

const coreReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SITE_META:
      return getSiteMeta(state);

    default:
      return state;
  }
};

export default coreReducer;
