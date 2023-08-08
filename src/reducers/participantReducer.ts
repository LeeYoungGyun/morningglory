// reducers/participantReducer.ts
import { SET_PARTICIPANT, ParticipantActionTypes } from '../actions/types';

const initialParticipantState = 5;

const participantReducer = (state = initialParticipantState, action: ParticipantActionTypes): number => {
  switch (action.type) {
    case SET_PARTICIPANT:
      return action.payload;
    default:
      return state;
  }
};

export default participantReducer;
