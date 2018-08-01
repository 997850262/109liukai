import { combineReducers } from 'redux';
import Authormessages from './Authormessages';
import List from './List';
import DListView from './DListView'
import DclassView from './DclassView'
export default combineReducers({
  Authormessages,
  List,
  DListView,
  DclassView
});
