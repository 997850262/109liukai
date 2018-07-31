import axios from 'axios';
import * as ActionTypes from '../const/ActionTypes'

export function getuser(next) {
    next({
        type: ActionTypes.GetUserREQ
      });
    axios({
      method: 'POST',
      url: 'http://xly-wkop.xiaoniangao.cn/getUserInfo',
      data: {
          mid: 'MID330900002'
      }
    }).then(res => {
      console.log(res);
      next({
        type: ActionTypes.GetUser,
        data: res.data
      });
    })
    .catch(err => {
      console.log(err);
      next({
        type: ActionTypes.GetUserFAI
      });
    });

  }
  export function getlesson(next) {
    next({
        type: ActionTypes.GetLesson_REQ
      });
    axios({
      method: 'POST',
      url: 'http://xly-wkop.xiaoniangao.cn/getLessonInfo',
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