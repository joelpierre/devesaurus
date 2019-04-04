import teamReducer, { initialState } from './team.reducer';
import { teamActionTypes } from '../actionTypes';

describe('Team Reducer', () => {

  it('returns default initial state', () => {
    const state = teamReducer(undefined, {});
    expect(state.data)
      .toBe(null);
  });

  it('returns updated teamData state', () => {
    const state = teamReducer({ ...initialState }, {
      type: teamActionTypes.SET_TEAM_DATA,
      data: {
        title: 'team',
      },
    });

    expect(state.data.title)
      .toBe('team');
  });

  it('clears the teamData state', () => {
    const state = teamReducer({ ...initialState }, {
      type: teamActionTypes.CLEAR_TEAM_DATA,
    });

    expect(state.data)
      .toBe(null);
  });

  it('returns updated personData state', () => {
    const state = teamReducer({ ...initialState }, {
      type: teamActionTypes.SET_PERSON_DATA,
      data: {
        title: 'person',
      },
    });

    expect(state.data.title)
      .toBe('person');
  });

  it('clears the personData state', () => {
    const state = teamReducer({ ...initialState }, {
      type: teamActionTypes.CLEAR_PERSON_DATA,
    });

    expect(state.data)
      .toBe(null);
  });
});
