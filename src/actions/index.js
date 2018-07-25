import { ADD_TODO, more,shanchu,zhiding,duoxuan } from '../const/ActionTypes'

export function addTodo(text){
  return {
    type: ADD_TODO,
    // text
    obj,
    isDialogActive,
    tianjia
  }
}
export function more(text){
    return {
      type: more,
      // text
      idx,
      isDialogActive,
      tianjia,
    }
  }
  export function shanchu(text){
    return {
      type: shanchu,
      // text
      idx,
      messages,
      isDialogActive,
      duoxuan
    }
  }
  export function zhiding(text){
    return {
      type: zhiding,
      // text
      idx,
      messages,
      isDialogActive,
      duoxuan,
      vip
    }
  }
  export function duoxuan(text){
    return {
      type: duoxuan,
      // text
      idx,
      messages,
      isDialogActive,
    //   icon,
    //   title,
    //   descript,
    //   time,
      duoxuan
    }
  }

/*export function changeStatus(idx, isCompleted){
  return {
    type: CHANGE_TODO_STATUS,
    idx,
    isCompleted
  }
}*/
