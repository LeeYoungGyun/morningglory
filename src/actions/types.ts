export const SET_PARTICIPANT = 'SET_PARTICIPANT';

interface SetParticipantAction {
  type: typeof SET_PARTICIPANT;
  payload: number;
}

export type ParticipantActionTypes = SetParticipantAction;


export const SET_PARTICIPANT_NAME = 'SET_PARTICIPANT_NAME';

interface SetParticipantNameAction {
  type: typeof SET_PARTICIPANT_NAME;
  index: number;
  name: string;
}

export type ParticipantActions = SetParticipantNameAction;


export interface ParticipantsState {
  participantsData: string[];
}