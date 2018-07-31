import { GetUser,GetLesson } from '../const/ActionTypes'
export function getuser(data){
  return {
    type: GetUser,
    data
  }
}
export function getlesson(res){
    return {
      type: GetLesson,
      res
    }
  }