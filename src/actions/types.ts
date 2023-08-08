export const SET_PARTICIPANT = 'SET_PARTICIPANT';

interface SetParticipantAction {
  type: typeof SET_PARTICIPANT;
  payload: number;
}

export type ParticipantActionTypes = SetParticipantAction;