import { combineReducers } from 'redux';
import Item from './Item';
import Dialog from './Dialog';
import { init_state } from './INIT_STATE';
import * as ActionTypes from '../const/ActionTypes'
const icon = require('../source/icon_Good_B-2.png');
// export default combineReducers({
//   Item,
//   Dialog
// });
export default function index(state =init_state,action){
  switch(action.type){
    case ActionTypes.HandleShowDialog: 
  {
      let newState = {...state};
      newState.isDialogActive = true;
      newState.tianjia = true;
      return newState;
  }

  case ActionTypes.OnfxClick:
  {
      const{idx}=action;
      state.idx=idx;
      let newState = {...state};
      newState.isDialogActive = true;
      newState.tianjia = false;
      return newState;
  }

  case ActionTypes.HandleClose:
  {
      let newState = {...state};
      newState.isDialogActive = false;
      newState.tianjia = false;
      return newState;
  }
  case ActionTypes.AddTodo:{
    const{obj}=action;
    //const obj = { "title":action.title, "descript": action.descript, "time": action.time};
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
    // const newVip = state.vip.slice();
    //     newVip.unshift(a[0]);

    //   this.index=null;
    //   const newState={...state}
    //   newState.vip=newVip
    //   newState.messages = newMessages
    //   return newState;
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