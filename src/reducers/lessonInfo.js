import { combineReducers } from 'redux'
import ActionTypes from '../const/ActionTypes'

function currentLessonsList(state = {}, action) {
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`:
    {
      return { ...state, [action.mid]: [ ...action.response.current.result ] }

      // return {
      //   ...state,
      //   ...entities.currentLessonsList
      // };
      
      // return {
      //   ...state,
      //   lessonEntities: {
      //     ...state.lessonEntities,
      //     ...action.response.current.entities.lesson,
      //     ...action.response.history.entities.lesson
      //   },
      //   currentLessonIds: action.response.current.result,
      //   historyLessonIds: action.response.history.result,
      // }
    }
      // return { ...state, [action.mid]: [ ...action.response.data.currentLessonsList ] }
      
    default:
      return state
  }
}
function historyLessonsList(state = {}, action) {
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`:
    {
      return { ...state, [action.mid]: [ ...action.response.history.result ] }
    }
      // return { ...state, [action.mid]: [ ...action.response.data.historyLessonsList ] }
    default:
      return state
  }
}

const lessonInfo = combineReducers({
  currentLessonsList,
  historyLessonsList
})

export default lessonInfo