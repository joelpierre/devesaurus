import * as actionTypes from '../actionTypes/page.actionTypes';

export const getPageData = data => ({
  type: actionTypes.GET_PAGE_DATA,
  data,
});

export const setPageData = data => ({
  type: actionTypes.SET_PAGE_DATA,
  data,
});

export const clearPageData = () => ({
  type: actionTypes.CLEAR_PAGE_DATA,
});

export const getPageDataFailed = () => ({
  type: actionTypes.GET_PAGE_FAILED,
});
