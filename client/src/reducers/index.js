import { combineReducers } from 'redux';
import ListElements from './ListElementsReducer';

export default combineReducers({
  list: ListElements
});
