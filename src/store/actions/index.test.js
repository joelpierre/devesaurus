import {
  getSiteMeta,
  setSiteMeta,
  getSiteMetaFailed,
  getSiteOptions,
  getSiteOptionsFailed,
  setSiteOptions,
  clearWordData,
  getWordData, getWordDataFailed, setWordData,
  getPostData,
  setPostData,
  getPostDataFailed,
  clearPostData,
  clearPageData,
  clearPersonData,
  clearTeamData,
  getPageData,
  getPageDataFailed,
  getPersonData,
  getPersonDataFailed,
  getTeamData,
  getTeamDataFailed,
  setPageData,
  setPersonData,
  setTeamData,
} from './';
import { coreActionTypes, postActionTypes, teamActionTypes, wordActionTypes } from '../actionTypes';

describe('Core Actions', () => {
  it('getSiteMeta should have the correct type', () => {
    expect(getSiteMeta().type)
      .toBe(coreActionTypes.GET_SITE_META);
  });

  it('setSiteMeta should have the correct type and data', () => {
    const data = {};

    expect(setSiteMeta(data).type)
      .toBe(coreActionTypes.SET_SITE_META);
    expect(setSiteMeta(data).data)
      .toBe(data);
  });

  it('getSiteMetaFailed should have the correct type', () => {
    expect(getSiteMetaFailed().type)
      .toBe(coreActionTypes.GET_SITE_META_FAILED);
  });

  it('getSiteOptions should have the correct type', () => {
    expect(getSiteOptions().type)
      .toBe(coreActionTypes.GET_SITE_OPTIONS);
  });

  it('setSiteOptions should have the correct type and data', () => {
    const data = {};

    expect(setSiteOptions(data).type)
      .toBe(coreActionTypes.SET_SITE_OPTIONS);
    expect(setSiteOptions(data).data)
      .toBe(data);
  });


  it('getSiteOptionsFailed should have the correct type', () => {
    expect(getSiteOptionsFailed().type)
      .toBe(coreActionTypes.GET_SITE_OPTIONS_FAILED);
  });
});

describe('Word Actions', () => {
  it('getWordData should have the correct type', () => {
    expect(getWordData().type)
      .toBe(wordActionTypes.GET_WORD_DATA);
  });

  it('getWordDataFailed should have the correct type', () => {
    expect(getWordDataFailed().type)
      .toBe(wordActionTypes.GET_WORD_FAILED);
  });

  it('setWordData should have the correct type and data', () => {
    const data = {};

    expect(setWordData(data).type)
      .toBe(wordActionTypes.SET_WORD_DATA);
    expect(setWordData(data).data)
      .toBe(data);
  });

  it('getWordData should have the correct type', () => {
    expect(clearWordData().type)
      .toBe(wordActionTypes.CLEAR_WORD_DATA);
  });
});

describe('Post Actions', () => {
  it('getPostData should have the correct type', () => {
    expect(getPostData().type)
      .toBe(postActionTypes.GET_POST_DATA);
  });

  it('getPostDataFailed should have the correct type', () => {
    expect(getPostDataFailed().type)
      .toBe(postActionTypes.GET_POST_FAILED);
  });

  it('setPostData should have the correct type and data', () => {
    const data = {};

    expect(setPostData(data).type)
      .toBe(postActionTypes.SET_POST_DATA);
    expect(setPostData(data).data)
      .toBe(data);
  });

  it('getPostData should have the correct type', () => {
    expect(clearPostData().type)
      .toBe(postActionTypes.CLEAR_POST_DATA);
  });
});

describe('Team and Person Actions', () => {
  it('getTeamData should have the correct type', () => {
    expect(getTeamData().type)
      .toBe(teamActionTypes.GET_TEAM_DATA);
  });

  it('getTeamDataFailed should have the correct type', () => {
    expect(getTeamDataFailed().type)
      .toBe(teamActionTypes.GET_TEAM_FAILED);
  });

  it('setTeamData should have the correct type and data', () => {
    const data = {};

    expect(setTeamData(data).type)
      .toBe(teamActionTypes.SET_TEAM_DATA);
    expect(setTeamData(data).data)
      .toBe(data);
  });

  it('getTeamData should have the correct type', () => {
    expect(clearTeamData().type)
      .toBe(teamActionTypes.CLEAR_TEAM_DATA);
  });

  // START PERSON TESTs
  it('getPersonData should have the correct type', () => {
    expect(getPersonData().type)
      .toBe(teamActionTypes.GET_PERSON_DATA);
  });

  it('getPersonDataFailed should have the correct type', () => {
    expect(getPersonDataFailed().type)
      .toBe(teamActionTypes.GET_PERSON_FAILED);
  });

  it('setPersonData should have the correct type and data', () => {
    const data = {};

    expect(setPersonData(data).type)
      .toBe(teamActionTypes.SET_PERSON_DATA);
    expect(setPersonData(data).data)
      .toBe(data);
  });

  it('getPersonData should have the correct type', () => {
    expect(clearPersonData().type)
      .toBe(teamActionTypes.CLEAR_PERSON_DATA);
  });
});
