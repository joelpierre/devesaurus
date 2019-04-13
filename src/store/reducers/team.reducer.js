import { updateObject } from '../../utils';
import { teamActionTypes } from '../actionTypes';

/**
 * Set initial state
 * @type {{data: any}}
 */
const initialState = {};

/**
 * Set Team data state
 * @param state
 * @param action
 */
const setTeamData = (state, action) => {
  return updateObject(state, {
    ...action.data,
  });
};

/**
 * Clear the current team data
 * @param state
 */
const clearTeamData = state => {
  return updateObject(state, {});
};

/**
 * Set Person data state
 * @param state
 * @param action
 */
const setPersonData = (state, action) => {
  return updateObject(state, {
    ...action.data,
  });
};

/**
 * Clear the current person data
 * @param state
 */
const clearPersonData = state => {
  return updateObject(state, {});
};

/**
 * Set the new state or return the current state as default
 * @param state
 * @param action
 * @returns {{data: any}}
 */
const teamReducer = (state = initialState, action) => {
  switch (action.type) {
    case teamActionTypes.SET_TEAM_DATA:
      return setTeamData(state, action);

    case teamActionTypes.CLEAR_TEAM_DATA:
      return clearTeamData(state, action);

    case teamActionTypes.SET_PERSON_DATA:
      return setPersonData(state, action);

    case teamActionTypes.CLEAR_PERSON_DATA:
      return clearPersonData(state, action);

    default:
      return state;
  }
};

export default teamReducer;
