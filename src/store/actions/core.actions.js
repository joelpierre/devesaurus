import { coreActionTypes } from '../actionTypes';

export const getSiteMeta = () => ({
  type: coreActionTypes.GET_SITE_META,
});

export const setSiteMeta = data => ({
  type: coreActionTypes.SET_SITE_META,
  data,
});

export const getSiteMetaFailed = () => ({
  type: coreActionTypes.GET_SITE_META_FAILED,
});

export const getSiteOptions = () => ({
  type: coreActionTypes.GET_SITE_OPTIONS,
});

export const setSiteOptions = data => ({
  type: coreActionTypes.SET_SITE_OPTIONS,
  data,
});

export const getSiteOptionsFailed = () => ({
  type: coreActionTypes.GET_SITE_OPTIONS_FAILED,
});
