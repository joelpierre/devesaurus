import { takeEvery, all } from 'redux-saga/effects';
import { getPageSaga } from './page.saga';

import * as pageActionTypes from '../actionTypes/page.actionTypes';

export function* watchPage() {
  yield all([
    takeEvery(pageActionTypes.GET_PAGE_DATA, getPageSaga),
  ]);
}
