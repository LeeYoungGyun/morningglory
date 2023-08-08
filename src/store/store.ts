// store.ts
import { createStore, combineReducers } from 'redux';
import participantReducer from '../reducers/participantReducer';

const rootReducer = combineReducers({
  participant: participantReducer
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
