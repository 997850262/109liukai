import * as Authormestypes from '../const/Authormestypes'
import * as ActionTypes from '../const/ActionTypes'
export default function Authormessages(state ={
    list: [
      {
        nick:'',
        mid:'',
        learningLesson:[''],
        enterDate:'',
        history_pay:'',
        totalLearningDays:'',
        lastLoginDate:'',
        tel:'',
        hurl:"",
        remark:"",
        weiChatCode:""
      }
    ],
  },action){
    switch(action.type){
      case ActionTypes.GetUser_SUC: 
      {
          console.log('头部数据拉取成功')
          let newState = {...state};
          newState.list=[action.response.data]
          // newState.list[0].nick=action.data.data.nick
          // newState.list[0].learningLesson=action.data.data.learningLesson
          // newState.list[0].enterDate=action.data.data.enterDate
          // newState.list[0].history_pay=action.data.data.history_pay
          // newState.list[0].totalLearningDays=action.data.data.totalLearningDays
          // newState.list[0].lastLoginDate=action.data.data.lastLoginDate
          // newState.list[0].tel=action.data.data.tel
          // newState.list[0].hurl=action.data.data.hurl
          // newState.list[0].remark=action.data.data.remark
          // newState.list[0].weiChatCode=action.data.data.weiChatCode
          // newState.list[0].mid=action.data.data.mid
          return newState;
      }
      case ActionTypes.GetUser_FAI: 
      {
          console.log('获取数据失败')
          return state;
      }
        default:
        return state;
    }
  }