import * as ActionTypes from '../const/ActionTypes'
import { init_state } from './INIT_STATE';
export default function Dialog(state ={
    isDialogActive: false,
    tianjia:false,
    duoxuan:false,},action){
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
        // const{idx}=action;
        // state.idx=idx;
        let newState = {...state};
        newState.isDialogActive = true;
        newState.tianjia = false;
        return newState;
    }

    case ActionTypes.Duoxuan:{
        const newState={...state}
        newState.duoxuan=true
        newState.isDialogActive=false
        return newState;
      }
      case ActionTypes.BlankDuoxuan:{
        const newState={...state}
        newState.duoxuan=false
        return newState;
      }
    case ActionTypes.HandleClose:
    {
        let newState = {...state};
        newState.isDialogActive = false;
        newState.tianjia = false;
        return newState;
    }

        default:
        return state;
    }
  }