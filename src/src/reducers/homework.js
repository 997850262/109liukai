import { combineReducers } from 'redux'
import ActionTypes from '../const/ActionTypes'
export default function homework(state ={
  user1:[],
  user2:[],
  user3:[],
  user4:[],
    // data : [{
    //     key: '1',
    //     author:{mid:'',nick:''},
    //     classInfo:{id:'',name:''},
    //     commentator:'',
    //     comments: [{content:'', from:'', id:'', mid:'', nick:'', time:''}],
    //     description:'',
    //     id:'',
    //     isExcellent:'',
    //     photos:[],
    //     status:'',
    //     teacherInfo:{id:'', mid :'', nick :'', realName:'', wxCode:''},
    //     time:''
    //   }]
},action){
    switch(action.type){
      case `${ActionTypes.Fetchhomework}_SUC`: 
      {
        // console.log('111索引',action.response.result)
        // const result = action.response.result;
        // let newstate={...state}
        // newstate.homework.user1 = [
        //   ...state.homework.user1,
        //   ...result
        // ]
        // // return [...result]
        // return newstate
        return{
          ...state,
          user1:action.response.result
        }
      }
      case `${ActionTypes.Fetchhomework2}_SUC`: 
      {
        return{
          ...state,
          user2:action.response.result
        }
      }
      case `${ActionTypes.Fetchhomework3}_SUC`: 
      {
        return{
          ...state,
          user3:action.response.result
        }
      }
      case `${ActionTypes.Fetchhomework4}_SUC`: 
      {
        return{
          ...state,
          user4:action.response.result
        }
      }
      case `${ActionTypes.Fetchhomework}_FAI`: 
      {
        console.log('获取列表数据失败')
        return state;
      }
      default:
      return state;
    }
  }
  // ids:{
  //   a: [],
  //   b: [],
  //   c: [],
  //   d: []
  // }
  // function comments(state = {}, action) {
  //   switch(action.type){
  //     case `${ActionTypes.Fetchhomework}_SUC`:
  //     {
  //       const result = action.response.comments.result;
  //       return { ...state, [action.mid]: result }
  //     }
  //     default:
  //       return state
  //   }
  // }
  // export default combineReducers({
  //   homework,
  //   comments
    
  // });