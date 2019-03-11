import * as actionTypes from '../actionTypes/page.actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  data: null,
};

const setPageData = (state, action) => {
  return updateObject(state, {
    data: action.data,
  });
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PAGE_DATA:
      return setPageData(state, action);

    default:
      return state;
  }

};

export default pageReducer;
