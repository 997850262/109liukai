import * as ActionTypes from '../const/ActionTypes'

export default function List(state ={
  dataSource : [{
    key: '1',
    classInfo: {id:'',name:''},
    status:'',
    startTime: '',
    teacherInfo:{id:'',mid:'',nick:'',realName:'',wxCode:''  },
    enterRate:'',
    homeworkSubmitRate:'',
    beCommenttedRate:'',
    signRate:'',
    satisfyRate:''
  }],
data : [{
  key: '1',
  classInfo: {id:'',name:''},
  status:'',
  startTime: '',
  teacherInfo:{id:'',mid:'',nick:'',realName:'',wxCode:''  },
  enterRate:'',
  homeworkSubmitRate:'',
  beCommenttedRate:'',
  signRate:'',
  satisfyRate:''
}],
},action){
  switch(action.type){
    case ActionTypes.GetLesson_SUC: 
    {
      console.log('获取列表数据成功')
      let newState = {...state};
      newState.dataSource=[...action.response.data.currentLessonsList]
      newState.data=[...action.response.data.historyLessonsList]
      return newState;
    }
    case ActionTypes.GetLesson_FAI: 
    {
      console.log('获取列表数据失败')
      return state;
    }
    default:
    return state;
  }
}