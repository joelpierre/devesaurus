import * as actionTypes from '../actionTypes/page.actionTypes';
import { updateObject } from '../../utilities';

const initialState = {
  data: null,
};

const setPageData = (state, action) => {
  return updateObject(state, {
    data: action.data,
  });
};

const clearPageData = (state) => {
  return updateObject(state, {
    data: null,
  });
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PAGE_DATA:
      return setPageData(state, action);

    case actionTypes.CLEAR_PAGE_DATA:
      return clearPageData(state, action);

    default:
      return state;
  }

};

export default pageReducer;
