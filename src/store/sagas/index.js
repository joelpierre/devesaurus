import { takeEvery, all } from 'redux-saga/effects';
import { getPageSaga } from './page.saga';
import { getSiteMetaSaga, getSiteOptionsSaga } from './core.saga';
import { coreActionTypes, pageActionTypes } from '../actionTypes';

/**
 * Watch Page generator function
 * @returns {IterableIterator<AllEffect<SimpleEffect<"FORK", ForkEffectDescriptor>>>}
 */
export function* watchPage() {
  yield all([
    takeEvery(pageActionTypes.GET_PAGE_DATA, getPageSaga),
  ]);
}

/**
 * Watch Site Meta generator function
 * @returns {IterableIterator<AllEffect<SimpleEffect<"FORK", ForkEffectDescriptor>>>}
 */
export function* watchSiteMeta() {
  yield all([
    takeEvery(coreActionTypes.GET_SITE_META, getSiteMetaSaga),
    takeEvery(coreActionTypes.GET_SITE_OPTIONS, getSiteOptionsSaga),
  ]);
}
