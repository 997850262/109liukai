import ActionTypes from '../const/ActionTypes';
/* eslint-disable */
import { normalize } from 'normalizr';
import * as schemes from '../schemes/index';

export function login(mid) {
  console.log(111,mid);
  return {
    Server_Api: {
      type: ActionTypes.Login,
      endpoint: '/login',
      params: {
        mid
      },
      // normailzerFun: response => normalize(response.data, schemes.Data)
    }
  };
}
export function fetchmymusic(token) {
  return {
    Server_Api: {
      type: ActionTypes.Fetchmymusic,
      endpoint: '/music/my_list',
      params: {
        token
      },
      normailzerFun: response => normalize(response, schemes.Data)
    }
  };
}
export function fetchrecommendmusic(token) {
  console.log(11111111111,token);
  return {
    Server_Api: {
      type: ActionTypes.Fetchrecommendmusic,
      endpoint: '/music/recommend_list',
      params: {
        token
      },
      normailzerFun: response => normalize(response.data, schemes.List)
    }
  };
}
export function selectid(id) {
  return {
    type: ActionTypes.Selectid,
    id
  };
}
export function selectmoreid(id) {
  return {
    type: ActionTypes.Selectmoreid,
    id
  };
}