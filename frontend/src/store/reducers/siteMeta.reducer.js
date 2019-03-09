import * as actionTypes from '../actionTypes/siteMeta.actionType';
import { updateObject } from '../../shared/utility';

const initialState = {
  title: 'Store Title',
  description: 'Store Description',
};

const getSiteMeta = (state, action) => {
  return updateObject(state, { title: action.title, description: action.description });
};

const siteMetaReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SITE_META:
      return getSiteMeta(state);

    default:
      return state;
  }
};

export default siteMetaReducer;
