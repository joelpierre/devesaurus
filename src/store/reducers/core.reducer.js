import * as actionTypes from '../actionTypes/core.actionTypes';
import { updateObject } from '../../utils';

const initialState = {
  title: 'Store Title',
  description: 'Store Description',
  api: process.env.GATSBY_BASE_URL,
  site: process.env.GATSBY_SITE_URL,
  loading: false,
  error: false,
  options: null,
};

const setSiteMeta = (state, action) => {
  return updateObject(state, {
    title: action.data.name,
    description: action.data.description,
  });
};

const setSiteOptions = (state, action) => {
  return updateObject(state, {
    options: action.data,
  });
};


const coreReducer = (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.SET_SITE_META:
      return setSiteMeta(state, action);

    case actionTypes.SET_SITE_OPTIONS:
      return setSiteOptions(state, action);

    default:
      return state;
  }
};

export default coreReducer;
