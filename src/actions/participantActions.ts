import { SET_PARTICIPANT, ParticipantActionTypes } from './types';

export const setParticipantState = (count: number): ParticipantActionTypes => {
  return {
    type: SET_PARTICIPANT,
    payload: count
  };
};