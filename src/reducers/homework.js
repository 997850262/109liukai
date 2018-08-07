import { combineReducers } from 'redux'
import ActionTypes from '../const/ActionTypes'
export default function homework(state =[
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
],action){
    switch(action.type){
      case `${ActionTypes.Fetchhomework}_SUC`: 
      {
        console.log('111索引',action.response.result)
        const result = action.response.result;
        return[...result]
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