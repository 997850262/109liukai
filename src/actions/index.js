import ActionTypes from '../const/ActionTypes';
/* eslint-disable */
import { normalize } from 'normalizr';
import * as schemes from '../schemes/index';
/* eslint-disable */
export function fetchhomework(token, isReviewed) {
  return {
    Server_Api: {
      type: ActionTypes.Fetchhomework,
      endpoint: '/getHomeWork',
      params: {
        token: 1,
        isReviewed: 0
        // a:[{token,isReviewed}]
      },
      normailzerFun: response => normalize(response.data, schemes.Data)
    }
  };
}
export function fetchhomework2(token, isReviewed) {
  return {
    Server_Api: {
      type: ActionTypes.Fetchhomework2,
      endpoint: '/getHomeWork',
      params: {
        token: 1,
        isReviewed: 1
        // a:[{token,isReviewed}]
      },
      normailzerFun: response => normalize(response.data, schemes.Data)
    }
  };
}
export function fetchhomework3(token, isReviewed) {
  return {
    Server_Api: {
      type: ActionTypes.Fetchhomework3,
      endpoint: '/getHomeWork',
      params: {
        token: 0,
        isReviewed: 0
        // a:[{token,isReviewed}]
      },
      normailzerFun: response => normalize(response.data, schemes.Data)
    }
  };
}
export function fetchhomework4(token, isReviewed) {
  return {
    Server_Api: {
      type: ActionTypes.Fetchhomework4,
      endpoint: '/getHomeWork',
      params: {
        token: 0,
        isReviewed: 1
        // a:[{token,isReviewed}]
      },
      normailzerFun: response => normalize(response.data, schemes.Data)
    }
  };
}
export function fetchid(id) {
  console.log(id);
  return {
    type: ActionTypes.Fetchid,
    id
  };
}
export function sendmid(mid) {
  return {
    type: ActionTypes.Sendmid,
    mid
  };
}
export function sendword(id, word, newcomment) {
  console.log(word);
  return {
    type: ActionTypes.Sendword,
    id,
    word,
    newcomment
  };
}
export function fitchimg(selectedKeys) {
  console.log(selectedKeys);
  return {
    type: ActionTypes.Fitchimg,
    selectedKeys
  };
}
export function addpower(id) {
  console.log(id);
  return {
    type: ActionTypes.Addpower,
    id
  };
}
export function setpower() {
  console.log();
  return {
    type: ActionTypes.Setpower
  };
}
export function cutpower(id) {
  console.log(id);
  return {
    type: ActionTypes.Cutpower,
    id
  };
}
export function deletepower(id) {
  return {
    type: ActionTypes.Deletepower,
    id
  };
}
export function sendid(mid) {
  return {
    type: ActionTypes.Sendid,
    mid
  };
}
export function reset() {
  return {
    type: ActionTypes.Reset,
  };
}
export function upward() {
  return {
    type: ActionTypes.Upward,
  };
}
export function leftward() {
  return {
    type: ActionTypes.Leftward,
  };
}
export function downward() {
  return {
    type: ActionTypes.Downward,
  };
}
export function rightward() {
  return {
    type: ActionTypes.Rightward,
  };
}
export function initialize() {
  return {
    type: ActionTypes.Initialize,
  };
}
export function random() {
  return {
    type: ActionTypes.Random,
  };
}