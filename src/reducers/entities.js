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
    case `${ActionTypes.Fetchhomework2}_SUC`:
    case `${ActionTypes.Fetchhomework3}_SUC`:
    case `${ActionTypes.Fetchhomework4}_SUC`:
    case `${ActionTypes.Fetchhomework}_SUC`: 
    {
      return {...state,
        ...action.response.entities.author,
      }
    }
    case ActionTypes.Sendmid:{//搜索
      const{mid}=action;
      console.log(11111111111111111111,mid);
        // let newState = {...state};
        // newState.a=[];
        // console.log(123, newState.a)
        // newState.mid=action.obj;
        // console.log(newState.dataSource[0])
        // console.log(newState.mid)
        // for(let i=0;i<newState.dataSource.length;i++)
        // {
        //   if(newState.dataSource[i].mid==newState.mid)
        //   newState.a.push( newState.dataSource[i])
        // }
        // console.log(newState.a)
        // return newState;
    }
    default:
    return state;
  }
}
function classes(state =[],action){
  switch(action.type){
    case `${ActionTypes.Fetchhomework2}_SUC`:
    case `${ActionTypes.Fetchhomework3}_SUC`:
    case `${ActionTypes.Fetchhomework4}_SUC`:
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
function comments(state =[],action){
  switch(action.type){
    case `${ActionTypes.Fetchhomework2}_SUC`:
    case `${ActionTypes.Fetchhomework3}_SUC`:
    case `${ActionTypes.Fetchhomework4}_SUC`:
    case `${ActionTypes.Fetchhomework}_SUC`: 
    {
      return {...state,
        ...action.response.entities.comments,
      }
    }
    case ActionTypes.Fetchid:
    {
      const{id}=action;
      console.log(11111111111111)
      console.log(id)
      const newState ={...state,
        [action.id]:{
          ...state[action.id],
          status:"reject",
          reason:"点评太简单",
        }
      }
      return newState;
    }
    case ActionTypes.Sendword://发送信息
    {
      const{id,word,newcomment}=action
      console.log(11111111,id)//作品id
      console.log(22222222,word)//回复内容
      const newState ={...state,
        [newcomment]:{
          ...state[newcomment],
          id:newcomment,
          content:word,
          from:"author",
          mid:1001,
          nick:"小年糕",
          time:1533362538734
        }
      }
      return newState;

    }
    default:
    return state;
  }
}
function data(state =[],action){
  switch(action.type){
    case `${ActionTypes.Fetchhomework2}_SUC`:
    case `${ActionTypes.Fetchhomework3}_SUC`:
    case `${ActionTypes.Fetchhomework4}_SUC`:
    case `${ActionTypes.Fetchhomework}_SUC`: 
    {
      return {...state,
        ...action.response.entities.data,
      }
    }
    case ActionTypes.Sendword://发送信息
    {
      const{id,word,newcomment}=action
      console.log(11111111,id)//作品id
      console.log(22222222,word)//回复内容
      console.log(state[action.id])
      // const newcomment=state[action.id].comments[0]+state[action.id].comments.length
      console.log(newcomment)
      console.log(state[action.id].comments.length)
      const newState = {...state};
      newState[action.id].comments.push(newcomment)
      console.log(newState)
      return newState;
    }
    default:
    return state;
  }
}
function teachers(state =[],action){
  switch(action.type){
    case `${ActionTypes.Fetchhomework2}_SUC`:
    case `${ActionTypes.Fetchhomework3}_SUC`:
    case `${ActionTypes.Fetchhomework4}_SUC`:
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
  comments,
  author,
  classes,
  teachers,
  data,
});