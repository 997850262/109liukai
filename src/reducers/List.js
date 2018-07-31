import * as ActionTypes from '../const/ActionTypes'

export default function List(state ={
  dataSource : [{
    key: '1',
    classInfo: '高级班',
    status:'进行中',
    startTime: '2017-4-20',
    teacherInfo:'小白老师',
    enterRate:'3/21',
    homeworkSubmitRate:'67.98%',
    beCommenttedRate:'87.98%',
    signRate:'3/21',
    satisfyRate:'90.14%'
  }, {
    key: '2',
    classInfo: '进阶班',
    status:'进行中',
    startTime: '2017-4-21',
    teacherInfo:'小白老师',
    enterRate:'5/21',
    homeworkSubmitRate:'76.89%',
    beCommenttedRate:'31.87%',
    signRate:'5/21',
    satisfyRate:'98.14%'
  }, {
    key: '3',
    classInfo: '提高班',
    status:'进行中',
    startTime: '2017-4-22',
    teacherInfo:'小白老师',
    enterRate:'13/21',
    homeworkSubmitRate:'13.89%',
    beCommenttedRate:'21.76%',
    signRate:'13/21',
    satisfyRate:'88.01%'
  }, {
    key: '4',
    classInfo: '入门班',
    status:'进行中',
    startTime: '2017-4-23',
    teacherInfo:'小白老师',
    enterRate:'20/21',
    homeworkSubmitRate:'98.45%',
    beCommenttedRate:'98.67%',
    signRate:'20/21',
    satisfyRate:'30.10%'
  }, {
    key: '5',
    classInfo: '体验班',
    status:'已结束',
    startTime: '2017-4-24',
    teacherInfo:'小白老师',
    enterRate:'21/21',
    homeworkSubmitRate:'31.54%',
    beCommenttedRate:'78.76%',
    signRate:'21/21',
    satisfyRate:'94.10%'
  }],
data : [{
  key: '1',
  classInfo: '高级班',
  status:'已结束',
  startTime: '2017-4-30',
  teacherInfo:'小白老师',
  enterRate:'21/21',
  homeworkSubmitRate:'80%',
  beCommenttedRate:'100%',
  signRate:'5/21',
  satisfyRate:'90%'
}],
},action){
  switch(action.type){
    case ActionTypes.GetLesson_SUC: 
    {
      let newState = {...state};
      const newdataSource = state.dataSource.slice();
      newdataSource.unshift(action.data)
      newState.dataSource = newdataSource
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