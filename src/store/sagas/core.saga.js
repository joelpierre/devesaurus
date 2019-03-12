import { put } from 'redux-saga/effects';
import axios from 'axios';
import * as coreActions from '../actions/core.actions';

export function* getSiteMetaSaga() {
  try {
    const response = yield axios.get(`${process.env.GATSBY_PROTOCOL}://${process.env.GATSBY_BASE_URL}/wp-json`);
    yield put(coreActions.setSiteMeta(response.data));
  } catch (error) {
    yield put(coreActions.getSiteMetaFailed());
  }
}
