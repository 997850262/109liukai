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
      console.log(action.data.data.currentLessonsList[0].beCommenttedRate)
      let newState = {...state};
      // newState.dataSource[0].beCommenttedRate=action.data.data.currentLessonsList[0].beCommenttedRate
      // const newdataSource = state.dataSource.slice();
      // newdataSource.unshift(action.data.data.currentLessonsList)
      // newState.dataSource = newdataSource
      newState.dataSource=[...action.data.data.currentLessonsList]
      newState.data=[...action.data.data.historyLessonsList]
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