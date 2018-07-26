import { HandleShowDialog,OnfxClick,HandleClose,AddTodo,Shanchu,Zhiding,Selectdelect,Duoxuan } from '../const/ActionTypes'

export function handleShowDialog(){
  return {
    type: HandleShowDialog
  }
}
export function onfxClick(idx){
  return {
    type: OnfxClick,
    idx
    // isDialogActive,
    // tianjia
  }
}
export function handleClose(){
  return {
    type: HandleClose,
    // isDialogActive,
    // tianjia
  }
}

export function addTodo(obj){
  return {
    type: AddTodo,
    obj
    // isDialogActive,
    // tianjia
  }
}
  export function shanchu(idx){
    return {
      type: Shanchu,
      idx
      // isDialogActive,
      // duoxuan
    }
  }
  export function zhiding(idx){
    return {
      type: Zhiding,
      idx
      // isDialogActive,
      // duoxuan,
      // vip
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

      // isDialogActive,
      // duoxuan
    }
  }

/*export function changeStatus(idx, isCompleted){
  return {
    type: CHANGE_TODO_STATUS,
    idx,
    isCompleted
  }
}*/
