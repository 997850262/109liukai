import * as ActionTypes from '../const/ActionTypes'
import { init_state } from './INIT_STATE';

const icon = require('../source/icon_Good_B-2.png');
const img6=require("../source/添加.svg");
export default function Item(state =init_state,action){
  switch(action.type){
    case ActionTypes.AddTodo:{
      const obj = { "title":action.title, "descript": action.descript, "time": action.time};
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
            const { idx,messages  } = action;
            this.index=idx;
          const newMessages = state.messages.slice();
          newMessages.splice(this.index,1);
        this.index=null;
        const newState={...state}
        newState.messages = newMessages
        return newState;
    }
    case ActionTypes.Zhiding:{
      const { idx,messages  } = action;
      this.index=idx;
      const newMessages = state.messages.slice();
          const a=newMessages.splice(this.index,1);
      const newVip = state.vip.slice();
          newVip.unshift(a[0]);

        this.index=null;
        const newState={...state}
        newState.vip=newVip
        newState.messages = newMessages
        return newState;
    }
    case ActionTypes.Duoxuan:{
      const { idx,messages  } = state;
      const newMessages = state.messages.slice();
        for(let i=this.arr.length;i>=0;i--)
        {
          if(this.arr[i]==true)
          {
            newMessages.splice(i,1);
          }
        }
        const newState={...state}
        newState.messages = newMessages;
        newState.isDialogActive=true
        newState.duoxuan=true
        return newState;
    }
    default:
    return state;
  }
}