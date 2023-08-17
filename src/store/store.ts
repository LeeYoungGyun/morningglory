// store.ts
import { createStore, combineReducers } from 'redux';
import participantReducer from '../reducers/participantReducer';
import participantsReducer from '../reducers/participantsReducer';

const rootReducer = combineReducers({
  participant: participantReducer,
  participantsData: participantsReducer

});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
