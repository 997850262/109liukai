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
  mid:'',
  a:[]
},action){
  switch(action.type){
    case ActionTypes.Fetchdangan_SUC: 
    {
      console.log('获取列表数据成功')
      let newState = {...state};
      newState.dataSource=[...action.response.data]
      return newState;
      // const {current,history} =  action.response
      // return { ...state, [action.mid]: [ ...action.response.current.result ] }
      // return { ...state, [action.mid]: [ ...action.response.history.result ] }
      // console.log(123,current)
      // return { ...state,...current.entities.currentLessonsList }
      // console.log(456,history)
      // return { ...state, ...history.entities.historyLessonsList }
    }
    case ActionTypes.Fetchdangan_FAI: 
    {
      console.log('获取列表数据失败')
      return state;
    }
    case ActionTypes.Sendmid:
    {
      let newState = {...state};
      newState.a=[];
      console.log(123, newState.a)
      newState.mid=action.obj;
      console.log(newState.dataSource[0])
      console.log(newState.mid)
      for(let i=0;i<newState.dataSource.length;i++)
      {
        if(newState.dataSource[i].mid==newState.mid)
        newState.a.push( newState.dataSource[i])
      }
      console.log(newState.a)
      
      return newState;
    }
    default:
    return state;
  }
}