import * as ActionTypes from '../const/ActionTypes'

export default function DclassView(state ={
  dataSource : [{
    key: '1',
    course_name:'',
    time:'',
    enter_status:'',
    homework_status: '',
    review_status:'',
    clockin_status:'',
    satisfied_score:''
  }],
  data:[{id :'',
         name :'',
         real_teacher:[{mid:'',name:'',wx_code:''}],
         virtual_teacher:[{id:'',nick:'',wx_code:''}]
  }]

},action){
  switch(action.type){
    case ActionTypes.Fetchclass_SUC: 
    {
      console.log('获取列表数据成功')
      let newState = {...state};
      newState.dataSource=[...action.response.data.list]
      newState.data=[action.response.data.basic_info]
      return newState;
    }
    case ActionTypes.Fetchclass_FAI: 
    {
      console.log('获取列表数据失败')
      return state;
    }
    default:
    return state;
  }
}