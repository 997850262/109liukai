import ActionTypes from '../const/ActionTypes'
import { normalize } from 'normalizr'
import * as schemes from '../schemes/index'
export function fetchhomework(token,isReviewed){
    return {
        Server_Api:{ 
        type: ActionTypes.Fetchhomework,
        endpoint:'/getHomeWork',
        params:{
          token,
          isReviewed
        },
        normailzerFun:response=> normalize(response.data, schemes.Data)
      }
    }
  }