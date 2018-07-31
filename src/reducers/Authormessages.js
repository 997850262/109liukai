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
      // {
      //   nick:'三班人',
      //   mid:'MID330900002',
      //   learningLesson:['摄影课,绘画课'],
      //   enterDate:'2018-03-30',
      //   history_pay:'987',
      //   totalLearningDays:'876天',
      //   lastLoginDate:'2018-03-30',
      //   tel:'13212333124',
      //   hurl:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      //   remark:"",
      //   weiChatCode:"zhdng"
      // }
    ],
  },action){
    switch(action.type){
      case ActionTypes.GetUser: 
      {
          console.log('头部数据拉取成功')
          let newState = {...state};
          newState.list[0].nick=action.data.nick
          newState.list[0].learningLesson=action.data.learningLesson
          newState.list[0].enterDate=action.data.enterDate
          newState.list[0].history_pay=action.data.history_pay
          newState.list[0].totalLearningDays=action.data.totalLearningDays
          newState.list[0].lastLoginDate=action.data.lastLoginDate
          newState.list[0].tel=action.data.tel
          newState.list[0].hurl=action.data.hurl
          newState.list[0].remark=action.data.remark
          newState.list[0].weiChatCode=action.data.weiChatCode
          return newState;
      }
      case ActionTypes.GetUserFAI: 
      {
          console.log('获取数据失败')
          return state;
      }
        default:
        return state;
    }
  }