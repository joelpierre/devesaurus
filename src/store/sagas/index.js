import { takeEvery, all } from 'redux-saga/effects';
import { getPageSaga } from './page.saga';
import { getWordSaga } from './word.saga';
import { getPostSaga } from './post.saga';
import { getSiteMetaSaga, getSiteOptionsSaga } from './core.saga';
import { getTeamSaga } from './team.saga';
import { getPersonSaga } from './person.saga';
import {
  coreActionTypes,
  pageActionTypes,
  postActionTypes,
  teamActionTypes,
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

/**
 * Watch Team generator function
 * @returns {IterableIterator<AllEffect<SimpleEffect<"FORK", ForkEffectDescriptor>>>}
 */
export function* watchTeam() {
  yield all([
    takeEvery(teamActionTypes.GET_TEAM_DATA, getTeamSaga),
    takeEvery(teamActionTypes.GET_PERSON_DATA, getPersonSaga),
  ]);
}
