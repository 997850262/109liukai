import { combineReducers } from 'redux'
import ActionTypes from '../const/ActionTypes'


function classes (state = {},action){
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`: {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.classes
      };
    }
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`: {
      const { history, current } = action.response;
      return {
        ...state,
        ...history.entities.classes,
        ...current.entities.classes
      };
    }

    default:
      return state;
  }
}

function teachers (state = {},action){
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`: {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.teachers
      };
    }
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`: {
      const { history, current } = action.response;
      return {
        ...state,
        ...history.entities.teachers,
        ...current.entities.teachers
      };
    }
    default:
      return state;
  }
}

function satisfiled (state = {},action){
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`: {
      const entities =  action.response.entities
      return {
        ...state,
        ...entities.satisfiled
      };
    }
    case `${ActionTypes.REPLY_USER_FEED_BACK}`: {
      const { time } = action.params
      
      const targetItem = { ...state[time] }
      targetItem.reply_status = 1

      const nextState = { ...state, [time]: targetItem }
      return nextState
    }
    default:
      return state;
  }
}
function currentLessonsList(state = {}, action) {
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`:
    {
      const {current} =  action.response
      console.log(123,current)
      return { ...state,...current.entities.currentLessonsList }

    }
    default:
      return state
  }
}
function historyLessonsList(state = {}, action) {
  switch(action.type){
    case `${ActionTypes.FETCH_LESSON_INFO}_SUC`:
    {
      const {history} =  action.response
      console.log(456,history)
      return { ...state, ...history.entities.historyLessonsList }
    }
    default:
      return state
  }
}
function list(state = [], action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_STUDENT_LIST}_SUC`:
    {
      return {...state,...action.response.entities.studentlist}
    }
    default:
      return state
  }
}
function author(state =[],action){
  switch(action.type){
    case `${ActionTypes.Fetchhomework}_SUC`: 
    {
      return {...state,
        ...action.response.entities.author,
      }
    }
    default:
    return state;
  }
}
function classes(state =[],action){
  switch(action.type){
    case `${ActionTypes.Fetchhomework}_SUC`: 
    {
      return {...state,
        ...action.response.entities.classes,
      }
    }
    default:
    return state;
  }
}
function commentsItem(state =[],action){
  switch(action.type){
    case `${ActionTypes.Fetchhomework}_SUC`: 
    {
      return {...state,
        ...action.response.entities.commentsItem,
      }
    }
    default:
    return state;
  }
}
function data(state =[],action){
  switch(action.type){
    case `${ActionTypes.Fetchhomework}_SUC`: 
    {
      return {...state,
        ...action.response.entities.data,
      }
    }
    default:
    return state;
  }
}
function teachers(state =[],action){
  switch(action.type){
    case `${ActionTypes.Fetchhomework}_SUC`: 
    {
      return {...state,
        ...action.response.entities.teachers,
      }
    }
    default:
    return state;
  }
}
// function homework(state =[],action){
//   switch(action.type){
//     case `${ActionTypes.Fetchhomework}_SUC`: 
//     {
//       console.log(111,action.response.entities.data)
//       return {...state,
//         ...action.response.entities,
//       }
//     }
//     default:
//     return state;
//   }
// }
export default combineReducers({
  // classes,
  // teachers,
  // satisfiled,
  // list,
  // currentLessonsList,
  // historyLessonsList,
  // homework,
  commentsItem,
  author,
  classes,
  teachers,
  data

});