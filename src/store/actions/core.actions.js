import * as actionTypes from '../actionTypes/core.actionTypes';

export const getSiteMeta = () => ({
  type: actionTypes.GET_SITE_META,
});

export const setSiteMeta = data => ({
  type: actionTypes.SET_SITE_META,
  data,
});

export const getSiteMetaFailed = () => ({
  type: actionTypes.GET_SITE_META_FAILED,
});

export const getSiteOptions = () => ({
  type: actionTypes.GET_SITE_OPTIONS,
});

export const setSiteOptions = data => ({
  type: actionTypes.SET_SITE_OPTIONS,
  data,
});

export const getSiteOptionsFailed = () => ({
  type: actionTypes.GET_SITE_OPTIONS_FAILED,
});
