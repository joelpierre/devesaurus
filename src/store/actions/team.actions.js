import { teamActionTypes } from '../actionTypes';

export const getTeamData = data => ({
  type: teamActionTypes.GET_TEAM_DATA,
  data,
});

export const setTeamData = data => ({
  type: teamActionTypes.SET_TEAM_DATA,
  data,
});

export const clearTeamData = () => ({
  type: teamActionTypes.CLEAR_TEAM_DATA,
});

export const getTeamDataFailed = () => ({
  type: teamActionTypes.GET_TEAM_FAILED,
});

export const getPersonData = data => ({
  type: teamActionTypes.GET_PERSON_DATA,
  data,
});

export const setPersonData = data => ({
  type: teamActionTypes.SET_PERSON_DATA,
  data,
});

export const clearPersonData = () => ({
  type: teamActionTypes.CLEAR_PERSON_DATA,
});

export const getPersonDataFailed = () => ({
  type: teamActionTypes.GET_PERSON_FAILED,
});
