import ActionTypes from '../const/ActionTypes'

function satisfied(state={}, action) {
  switch (action.type) {
    case `${ActionTypes.FETCH_LESSON_SATISFIED_INFO}_SUC`:{
      const result = action.response.result;
      return { ...state, [action.mid]: result }}
      // case `${ActionTypes.FETCH_LESSON_INFO}_SUC`:{
      //   const result = action.response.result;
      //   return { ...state, [action.id]: result }}
    default:
      return state
  }
}

export default satisfied