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
Satisfaction : [{
  key: '1',
  class_info: {id:'',name:''},
  course_name:'',
  time:'',
  teacher_info:{id:'',mid:'',nick:'',real_name:'',wx_code:''  },
  satisfied_score:'',
  satisfied_detail:'',
  reply_status:''
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
    case ActionTypes.FetchSatisfaction_SUC: 
    {
      console.log('获取满意度列表数据成功')
      let newState = {...state};
      newState.Satisfaction=[...action.response.data.list]
      return newState;
    }
    case ActionTypes.Sendid:
    {
      const{obj}=action;
      let newState = {...state};
      //console.log(obj);
      // console.log(newState.Satisfaction.length);
      for(let i=0;i<newState.Satisfaction.length;i++)
      {
        if(newState.Satisfaction[i].class_info.id==obj)
        {
          if(newState.Satisfaction[i].reply_status==0)
          {
            newState.Satisfaction[i].reply_status=!newState.Satisfaction[i].reply_status;
          }
        }
      }
      return newState;
    }
    default:
    return state;
  }
}