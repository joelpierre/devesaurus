import * as actionTypes from '../actionTypes/page.actionTypes';

export const getPageData = data => ({
  type: actionTypes.GET_PAGE_DATA,
  data,
});

export const setPageData = data => ({
  type: actionTypes.SET_PAGE_DATA,
  data,
});

export const setPageDataFailed = () => ({
  type: actionTypes.GET_PAGE_FAILED,
});
