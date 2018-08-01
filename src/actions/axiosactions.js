import axios from 'axios';
import * as ActionTypes from '../const/ActionTypes';
export function fetchuser(mid){
    return {
      Server_Api:{ 
        type: ActionTypes.GetUser,
        endpoint:'/getUserInfo',
        params:{
          mid
        }
      }
    }
  }
  export function fetchlesson(mid){
    return {
      Server_Api:{ 
        type: ActionTypes.GetLesson,
        endpoint:'/getLessonInfo',
        params:{
          mid
        }
      }
    }
  }
  export function fetchdangan(mid){
    return {
      Server_Api:{ 
        type: ActionTypes.Fetchdangan,
        endpoint:'/getStudentList',
        params:{
          mid
        }
      }
    }
  }
  export function fetchclass(id){
    return {
      Server_Api:{ 
        type: ActionTypes.Fetchclass,
        endpoint:'/getClassInfo',
        params:{
          id
        }
      }
    }
  }
