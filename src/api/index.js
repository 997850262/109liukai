import axios from 'axios';
import * as ActionTypes from '../const/ActionTypes'

export function getuser(next) {
    next({
        type: ActionTypes.GetUser_REQ
      });
    axios({
      method: 'POST',
      url: 'http://xly-wkop.xiaoniangao.cn/getUserInfo',
      data: {
          mid:'MID330900002'
      },
      headers:{'Content-Type':'application/x-www-form-urlencoded'}
    }).then(res => {
      console.log(res);
      next({
        type: ActionTypes.GetUser_SUC,
        data: res.data
      });
    })
    .catch(err => {
      console.log(err);
      next({
        type: ActionTypes.GetUser_FAI
      });
    });

  }

  export function getlesson(next) {
    next({
        type: ActionTypes.GetLesson_REQ
      });
    axios({
      headers:{'Content-Type':'application/x-www-form-urlencoded'},
      method: 'POST',
      url: 'http://xly-wkop.xiaoniangao.cn/getLessonInfo',
      data: {
        mid:'MID330900002'
    },
    }).then(res => {
      console.log(res);
      next({
        type: ActionTypes.GetLesson_SUC,
        data: res.data
      });
    })
    .catch(err => {
      console.log(err);
      next({
        type: ActionTypes.GetLesson_FAI
      });
    });

  }