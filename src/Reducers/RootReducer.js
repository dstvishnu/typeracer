import { combineReducers } from 'redux';
import RacerReducer from './RacerReducer';
import ErrorReducer from './ErrorReducer';

export default combineReducers({
  racer: RacerReducer,
  errors: ErrorReducer
});
