import { combineReducers } from 'redux';
import lessonInfo from './lessonInfo';
import userInfo from './userInfo';
import ui from './ui';
import studentLib from './studentLib';
import classesDetail from './classesDetail';
import satisfied from './satisfied';
import entities from './entities';
import homework from './homework';
import Power from './Power';
import game from './game';

const rootReducer = combineReducers({
  entities,
  lessonInfo,
  userInfo,
  studentLib,
  classesDetail,
  satisfied,
  ui,
  homework,
  Power,
  game
});
export default rootReducer;
