import { Getidx,BlankDuoxuan,HandleShowDialog,OnfxClick,HandleClose,AddTodo,Shanchu,Zhiding,Selectdelect,Duoxuan } from '../const/ActionTypes'
import * as ActionTypes from '../const/ActionTypes';
export function getidx(idx){
  return {
    type: Getidx,
    idx
  }
}
export function blankDuoxuan(){
  return {
    type: BlankDuoxuan,
  }
}
export function handleShowDialog(){
  return {
    type: HandleShowDialog
  }
}
export function onfxClick(idx){
  return {
    type: OnfxClick,
    idx
  }
}
export function handleClose(){
  return {
    type: HandleClose,
  }
}

export function addTodo(obj){
  return {
    type: AddTodo,
    obj
  }
}
  export function shanchu(idx){
    return {
      type: Shanchu,
      idx
    }
  }
  export function zhiding(idx){
    return {
      type: Zhiding,
      idx
    }
  }
  export function selectdelect(){
    return{
      type:Selectdelect,
    }
  }
  export function duoxuan(){
    return {
      type: Duoxuan,
    }
  }

