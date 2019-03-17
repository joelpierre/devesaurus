import { takeEvery, all } from 'redux-saga/effects';
import { getPageSaga } from './page.saga';
import { getSiteMetaSaga, getSiteOptionsSaga } from './core.saga';

import * as pageActionTypes from '../actionTypes/page.actionTypes';
import * as coreActionTypes from '../actionTypes/core.actionTypes';

export function* watchPage() {
  yield all([
    takeEvery(pageActionTypes.GET_PAGE_DATA, getPageSaga),
  ]);
}

export function* watchSiteMeta() {
  yield all([
    takeEvery(coreActionTypes.GET_SITE_META, getSiteMetaSaga),
    takeEvery(coreActionTypes.GET_SITE_OPTIONS, getSiteOptionsSaga),
  ]);
}
