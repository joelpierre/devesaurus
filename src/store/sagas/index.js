import { takeEvery, all } from 'redux-saga/effects';
import { getPageSaga } from './page.saga';
import { getWordSaga } from './word.saga';
import { getPostSaga } from './post.saga';
import { getSiteMetaSaga, getSiteOptionsSaga } from './core.saga';
import {
  coreActionTypes,
  pageActionTypes,
  postActionTypes,
  wordActionTypes,
} from '../actionTypes';

/**
 * Watch Page generator function
 * @returns {IterableIterator<AllEffect<SimpleEffect<"FORK", ForkEffectDescriptor>>>}
 */
export function* watchPage() {
  yield all([takeEvery(pageActionTypes.GET_PAGE_DATA, getPageSaga)]);
}

/**
 * Watch Word generator function
 * @returns {IterableIterator<AllEffect<SimpleEffect<"FORK", ForkEffectDescriptor>>>}
 */
export function* watchWord() {
  yield all([takeEvery(wordActionTypes.GET_WORD_DATA, getWordSaga)]);
}

/**
 * Watch Post generator function
 * @returns {IterableIterator<AllEffect<SimpleEffect<"FORK", ForkEffectDescriptor>>>}
 */
export function* watchPost() {
  yield all([takeEvery(postActionTypes.GET_POST_DATA, getPostSaga)]);
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
