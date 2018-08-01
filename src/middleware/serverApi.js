import axios from 'axios';
import * as ActionTypes from '../const/ActionTypes'

const API_DOMAIN = 'http://xly-wkop.xiaoniangao.cn';

const callServerApi = (endpoint, params) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: API_DOMAIN + endpoint,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: params
    }).then(res => {
      if (res.data.ret === 1) {
        return resolve(res);
      }
      return reject({ errMsg: res.data.errMsg });
    }).catch(err => {
      return reject({ errMsg: JSON.stringify(err) });
    });
  });
}

export default store => next => action => {
  if (!action.Server_Api) {
    return next(action);
  }
  const {
    type,
    endpoint,
    params
  } = action.Server_Api;
  console.log(endpoint)
  console.log(type)
  console.log(params)
  if (typeof type !== 'string') {
    throw new Error('type shoudle be a string');
  }
  if (typeof endpoint !== 'string') {
    throw new Error('url shoudle be a string');
  }
  if (typeof params !== 'object') {
    throw new Error('params shoudle be a object');
  }

  next({
    type: `${type}_REQ`
  });

  return callServerApi(endpoint, params)
    .then(res => {
        console.log('123',res)
      next({
        type: `${type}_SUC`,
        response: res.data
      });
    }).catch(err => {
      next({
        type: `${type}_FAI`,
        errMsg: err.errMsg
      });
    });
};
