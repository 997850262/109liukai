// import axios from 'axios';
// import * as ActionTypes from '../const/ActionTypes'

// const API_DOMAIN = 'http://xly-wkop.xiaoniangao.cn';

// const callServerApi = (endpoint, params) => {
//   return new Promise((resolve, reject) => {
//     axios({
//       method: 'POST',
//       url: API_DOMAIN + endpoint,
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded'
//       },
//       data: params
//     }).then(res => {
//       if (res.data.ret === 1) {
//         return resolve(res);
//       }
//       return reject({ errMsg: res.data.errMsg });
//     }).catch(err => {
//       return reject({ errMsg: JSON.stringify(err) });
//     });
//   });
// }

// export default store => next => action => {
//   if (!action.Server_Api) {
//     return next(action);
//   }
//   const {
//     type,
//     endpoint,
//     params
//   } = action.Server_Api;
//   console.log(endpoint)
//   console.log(type)
//   console.log(params)
//   if (typeof type !== 'string') {
//     throw new Error('type shoudle be a string');
//   }
//   if (typeof endpoint !== 'string') {
//     throw new Error('url shoudle be a string');
//   }
//   if (typeof params !== 'object') {
//     throw new Error('params shoudle be a object');
//   }

//   next({
//     type: `${type}_REQ`
//   });

//   return callServerApi(endpoint, params)
//     .then(res => {
//         console.log('123',res)
//       next({
//         type: `${type}_SUC`,
//         response: res.data
//       });
//     }).catch(err => {
//       next({
//         type: `${type}_FAI`,
//         errMsg: err.errMsg
//       });
//     });
// };

// 分割

import axios from 'axios';

// const arr = [];
const API_DOMAIN = 'http://xly-wkop.xiaoniangao.cn';
const axiosFetch = axios.create({
  baseURL: API_DOMAIN,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
});

const callServerApi = apiParams => {
  const { endpoint, params } = apiParams;
  return new Promise((resolve, reject) => {
    axiosFetch({
      method: 'POST',
      url: endpoint,
      data: params
    })
      .then(res => {
        if (res.data.ret === 1) {
          resolve(res);
        } else {
          reject(res.data.errMsg);
        }
      })
      .catch(res => {
        reject(JSON.stringify(res));
      });
  });
};
/* eslint-disable */
const serverApi = (store) => next => action => {
  if (!action.Server_Api) { return next(action); }
  const { type, endpoint, params } = action.Server_Api;
  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint.');
  }
  if (typeof type !== 'string') {
    throw new Error('Specify a string type.');
  }
  if (typeof params !== 'object') {
    throw new Error('Specify a object params.');
  }

  const { normailzerFun } = action.Server_Api;
  function actionWith(data) {
    const finalAction = { ...action, ...data };
    delete finalAction.Server_Api;
    return finalAction;
  }
  next(actionWith({
    type: `${type}_REQ`,
    __api: { endpoint, params }
  }));
  callServerApi({ endpoint, params })
    .then(res => {
      console.log(999,res)
      const response = typeof (normailzerFun) !== 'undefined' ? normailzerFun(res.data) : res.data;
      if(params.gettoken){
        params.gettoken(res.data);
      }
      console.log('中间件', response);
      next(actionWith({
        type: `${type}_SUC`,
        __api: { endpoint, params },
        response
      }));
    })
    .catch(errMsg => {
      next(actionWith({
        type: `${type}_FAI`,
        __api: { endpoint, params },
        errMsg
      }));
    });
};


export default serverApi;
