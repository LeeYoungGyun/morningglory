import { SET_PARTICIPANT_NAME, ParticipantActions } from '../actions/types';

const initialState = {
   participantsData: []
 };
 
 export default function participantsReducer(state = initialState, action: ParticipantActions) {
   switch (action.type) {
     case 'SET_PARTICIPANT_NAME':
       return {
         ...state,
         participantsData: state.participantsData.map((item, idx) =>
           idx === action.index ? action.name : item
         )
       };
     // ... other actions
     default:
       return state;
   }
 } 