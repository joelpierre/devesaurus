import { wordActionTypes } from '../actionTypes';

export const getWordData = data => ({
  type: wordActionTypes.GET_WORD_DATA,
  data,
});

export const setWordData = data => ({
  type: wordActionTypes.SET_WORD_DATA,
  data,
});

export const clearWordData = () => ({
  type: wordActionTypes.CLEAR_WORD_DATA,
});

export const getWordDataFailed = () => ({
  type: wordActionTypes.GET_WORD_FAILED,
});
