import ActionTypes from '../const/ActionTypes'
import { normalize } from 'normalizr'
import * as schemes from '../schemes/index'

export default {
  fetchLessonInfo: (params) => {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_LESSON_INFO,
        endpoint: '/getLessonInfo',
        params: {
          mid: params.mid
        },
        // normailzerFun: json => {
        //   return {
        //     current: normalize(json.data.currentLessonsList, schemes.lessonListSchema),
        //     history: normalize(json.data.historyLessonsList, schemes.lessonListSchema)
        //   };
        // }
        normailzerFun:response=>{
         const current = normalize(response.data.currentLessonsList, schemes.CurrentLessonsList)
         const history = normalize(response.data.historyLessonsList, schemes.HistoryLessonsList)
         return{
          current,
          history
         }
        } 
        // normailzerFun:response=> normalize(response.data.historyLessonsList, schemes.HistoryLessonsList)
      },
      mid: params.mid
    }
  },
  // fetchLessonInfo: (params) => {
  //   return {
  //     SERVER_API: {
  //       type: ActionTypes.FETCH_LESSON_INFO,
  //       endpoint: '/getLessonInfo',
  //       params: {
  //         mid: params.mid
  //       },
  //       normailzerFun:response=> normalize(response.data.historyLessonsList, schemes.HistoryLessonsList)
  //     },
  //     mid: params.mid
  //   }
  // },
  fetchLessonSatisfiedInfo: (params) => {
    return {
      SERVER_API: {
        type: ActionTypes.FETCH_LESSON_SATISFIED_INFO,
        endpoint: '/getSatisfiledList',
        params: {
          mid: params.mid
        },
        normailzerFun:response=> normalize(response.data.list, schemes.SATISFILEDLIST)
      },
      mid: params.mid
    }
  },
  replyUserFeedBack: (params) => {
    const { mid, time, lessonIndex } = params
    return {
      type: ActionTypes.REPLY_USER_FEED_BACK,
      params: { mid, lessonIndex, time }
    }
  }
}