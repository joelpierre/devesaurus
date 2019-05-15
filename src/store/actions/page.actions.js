import { pageActionTypes } from '../actionTypes';

export const getPageData = data => ({
  type: pageActionTypes.GET_PAGE_DATA,
  data,
});

export const setPageData = data => ({
  type: pageActionTypes.SET_PAGE_DATA,
  data,
});

export const clearPageData = () => ({
  type: pageActionTypes.CLEAR_PAGE_DATA,
});

export const getPageDataFailed = () => ({
  type: pageActionTypes.GET_PAGE_FAILED,
});
