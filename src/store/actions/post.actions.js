import { postActionTypes } from '../actionTypes';

export const getPostData = data => ({
  type: postActionTypes.GET_POST_DATA,
  data,
});

export const setPostData = data => ({
  type: postActionTypes.SET_POST_DATA,
  data,
});

export const clearPostData = () => ({
  type: postActionTypes.CLEAR_POST_DATA,
});

export const getPostDataFailed = () => ({
  type: postActionTypes.GET_POST_FAILED,
});
