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

const setSiteMeta = (state, action) => {
  return updateObject(state, {
    title: action.data.name,
    description: action.data.description,
  });
};


const coreReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SITE_META:
      return setSiteMeta(state, action);

    default:
      return state;
  }
};

export default coreReducer;
