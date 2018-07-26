import * as ActionTypes from '../const/ActionTypes'
import { init_state } from './INIT_STATE';
export default function Item(state =init_state,action){
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
        let newState = {...state};
        newState.isDialogActive = true;
        newState.tianjia = false;
        return newState;
    }

    // case ActionTypes.duoxuan:
    // {
    //     return{...state,isDialogActive:false,duoxuan:true}
    // }

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