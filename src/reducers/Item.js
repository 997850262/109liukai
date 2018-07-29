import * as ActionTypes from '../const/ActionTypes'
import { init_state } from './INIT_STATE';

const icon = require('../source/icon_Good_B-2.png');
const img6=require("../source/添加.svg");
export default function Item(state ={
  header:[
    {
    head:"微信",
    img:img6,
    }
  ],
  vip:[
    {
      icon: icon,
      title: '小年糕',
      descript: 'hello 小年糕',
      time: '7-18 11:14',
    }
  ],
  messages: [
    {
      icon: icon,
      title: '小年糕',
      descript: 'hello 小年糕',
      time: '7-18 11:14',
    },
    {
      icon: icon,
      title: '小板凳',
      descript: 'hello 小板凳',
      time: '7-18 11:15',
    },
    {
      icon: icon,
      title: '小豆包',
      descript: 'hi 小豆包',
      time: '7-17 10:00',
    }
  ],
  idx:null,
  arr:[]
},action){
  switch(action.type){
    case ActionTypes.Getidx:{
      const{idx}=action;
      const newState={...state}
      newState.idx=idx;
      return newState;
    }
    case ActionTypes.AddTodo:{
      const{obj}=action;
      const newMessages = state.messages.slice();
      newMessages.unshift({
        icon: icon,
        ...obj,
      });
      const newState={...state}
      newState.messages = newMessages
      return newState;
    }
    case ActionTypes.Shanchu: {
      const newMessages = state.messages.slice();
      newMessages.splice(state.idx,1);
      state.idx=null;
    const newState={...state}
    newState.messages = newMessages
    return newState;
    }
    case ActionTypes.Zhiding:{
      const newMessages = state.messages.slice();
      const a=newMessages.splice(state.idx,1);
      newMessages.unshift(a[0]);
      state.idx=null;
      const newState={...state}
      newState.messages = newMessages
      return newState;
      // const { idx,messages  } = action;
      // this.index=idx;
      // const newMessages = state.messages.slice();
      //     const a=newMessages.splice(this.index,1);
      // const newVip = state.vip.slice();
      //     newVip.unshift(a[0]);

      //   this.index=null;
      //   const newState={...state}
      //   newState.vip=newVip
      //   newState.messages = newMessages
      //   return newState;
    }
    case ActionTypes.Selectdelect:{
      const newMessages = state.messages.slice();
        for(let i=state.arr.length;i>=0;i--)
        {
          if(state.arr[i]==true)
          {
            newMessages.splice(i,1);
          }
        }
        const newState={...state}
        newState.messages = newMessages;
         newState.duoxuan=false
        return newState;
    }

    default:
    return state;
  }
}