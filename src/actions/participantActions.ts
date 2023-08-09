import { SET_PARTICIPANT, ParticipantActionTypes } from './types';

export const setParticipant = (count: number): ParticipantActionTypes => {
  return {
    type: SET_PARTICIPANT,
    payload: count
  };
};