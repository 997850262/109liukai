import axios from 'axios';
import * as ActionTypes from '../const/ActionTypes';
import { Sendmid } from '../const/ActionTypes'
import{Sendid} from '../const/ActionTypes'
import { normalize } from 'normalizr'
import * as schema from '../schema/index'
// import * as schemes from '../schema'
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
        },
        // normailzerFun:response=>{
        //   const current = normalize(response.data.currentLessonsList, schema.CurrentLessonsList)
        //   const history = normalize(response.data.historyLessonsList, schema.HistoryLessonsList)
        //   return{
        //    current,
        //    history
        //   }
        //  } 
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
  export function sendmid(obj){
    return {
      type: Sendmid,
      obj
    }
  }
  export function fetchSatisfaction(mid){
    return {
      Server_Api:{ 
        type: ActionTypes.FetchSatisfaction,
        endpoint:'/getSatisfiledList',
        params:{
          mid
        }
        // normailzerFun:response=> normalize(response.data.list, schemes.SATISFILEDLIST)
      }
    }
  }
  export function sendid(obj){
    return {
      type: Sendid,
      obj
    }
  }
