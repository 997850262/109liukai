import ActionTypes from '../const/ActionTypes'
import { normalize } from 'normalizr'
import * as schemes from '../schemes/index'
export function fetchhomework(token,isReviewed){
    return {
        Server_Api:{ 
        type: ActionTypes.Fetchhomework,
        endpoint:'/getHomeWork',
        params:{
          token:1,
          isReviewed:0
          // a:[{token,isReviewed}]
        },
        normailzerFun:response=> normalize(response.data, schemes.Data)
      }
    }
  }
  export function fetchhomework2(token,isReviewed){
    return {
        Server_Api:{ 
        type: ActionTypes.Fetchhomework2,
        endpoint:'/getHomeWork',
        params:{
          token:1,
          isReviewed:1
          // a:[{token,isReviewed}]
        },
        normailzerFun:response=> normalize(response.data, schemes.Data)
      }
    }
  }
  export function fetchhomework3(token,isReviewed){
    return {
        Server_Api:{ 
        type: ActionTypes.Fetchhomework3,
        endpoint:'/getHomeWork',
        params:{
          token:0,
          isReviewed:0
          // a:[{token,isReviewed}]
        },
        normailzerFun:response=> normalize(response.data, schemes.Data)
      }
    }
  }
  export function fetchhomework4(token,isReviewed){
    return {
        Server_Api:{ 
        type: ActionTypes.Fetchhomework4,
        endpoint:'/getHomeWork',
        params:{
          token:0,
          isReviewed:1
          // a:[{token,isReviewed}]
        },
        normailzerFun:response=> normalize(response.data, schemes.Data)
      }
    }
  }
  export function fetchid(id){
    console.log(id)
    return {
        type: ActionTypes.Fetchid,
        id
      }
    }
    export function sendmid(mid){
      return {
        type: ActionTypes.Sendmid,
        mid
      }
    }
    export function sendword(id,word,newcomment){
      console.log(word)
      return {
        type: ActionTypes.Sendword,
        id,
        word,
        newcomment
      }
    }