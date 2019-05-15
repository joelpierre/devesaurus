import {
  watchPage,
  watchPost,
  watchSiteMeta,
  watchWord,
  watchTeam,
} from './index';
import { takeEvery, all } from 'redux-saga/effects';
import {
  coreActionTypes,
  pageActionTypes,
  postActionTypes,
  teamActionTypes,
  wordActionTypes,
} from '../actionTypes';
import { getPageSaga } from './page.saga';
import { getWordSaga } from './word.saga';
import { getPostSaga } from './post.saga';
import { getSiteMetaSaga, getSiteOptionsSaga } from './core.saga';
import { getTeamSaga } from './team.saga';
import { getPersonSaga } from './person.saga';

describe('Index saga flow', () => {
  let generator;

  beforeEach(() => {
    generator = null;
  });

  it('should call watchPage', () => {
    generator = watchPage();

    expect(generator.next().value).toEqual(
      all([takeEvery(pageActionTypes.GET_PAGE_DATA, getPageSaga)])
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should call watchWord', () => {
    generator = watchWord();

    expect(generator.next().value).toEqual(
      all([takeEvery(wordActionTypes.GET_WORD_DATA, getWordSaga)])
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should call watchPost', () => {
    generator = watchPost();

    expect(generator.next().value).toEqual(
      all([takeEvery(postActionTypes.GET_POST_DATA, getPostSaga)])
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should call watchTeam', () => {
    generator = watchTeam();

    expect(generator.next().value).toEqual(
      all([
        takeEvery(teamActionTypes.GET_TEAM_DATA, getTeamSaga),
        takeEvery(teamActionTypes.GET_PERSON_DATA, getPersonSaga),
      ])
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('should call watchSiteMeta', () => {
    generator = watchSiteMeta();

    expect(generator.next().value).toEqual(
      all([
        takeEvery(coreActionTypes.GET_SITE_META, getSiteMetaSaga),
        takeEvery(coreActionTypes.GET_SITE_OPTIONS, getSiteOptionsSaga),
      ])
    );
    expect(generator.next().done).toBeTruthy();
  });
});
