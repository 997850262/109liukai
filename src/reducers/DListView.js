import * as ActionTypes from '../const/ActionTypes'

export default function DListView(state ={
  dataSource : [{
    key: '1',
    nick:'',
    mid:'',
    hurl:'',
    enter_time: '',
    start_time:'',
    learning_lessons:[''],
    teachers:['']
  }],
},action){
  switch(action.type){
    case ActionTypes.Fetchdangan_SUC: 
    {
      console.log('获取列表数据成功')
      let newState = {...state};
      newState.dataSource=[...action.response.data]
      return newState;
    }
    case ActionTypes.Fetchdangan_FAI: 
    {
      console.log('获取列表数据失败')
      return state;
    }
    default:
    return state;
  }
}