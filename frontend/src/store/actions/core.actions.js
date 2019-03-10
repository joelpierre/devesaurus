import * as actionTypes from '../actionTypes/core.actionTypes';

export const getSiteMeta = (data) => {
  return {
    type: actionTypes.GET_SITE_META,
    data,
  };
};
