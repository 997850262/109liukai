import { combineReducers } from 'redux';
import ActionTypes from '../const/ActionTypes';
/* eslint-disable */
function music(state = {
  data:{},
  entities:{},
  result:[],
  recommendentities:{},
  recommendresult:[]
}, action) {
  switch (action.type) {
    case `${ActionTypes.Login}_SUC`:
    {
      console.log(action)

      return {
        ...state,
        data:action.response.data
      };
    }
    case `${ActionTypes.Fetchmymusic}_SUC`:
    {
      console.log(action)
      return {
        ...state,
        entities:action.response.entities,
        result:action.response.result
      };
    }
    case `${ActionTypes.Fetchrecommendmusic}_SUC`:
    {
      console.log(111111111111111,action)

      return {
        ...state,
        recommendentities:action.response.entities.list,
        recommendresult:action.response.result.list
      };
    }
    
    default:
      return state;
  }
}
function operation(state = {
selectid:0,
selectmoreid:[]
}, action) {
  switch (action.type) {
    case ActionTypes.Selectid:
    {
      return {
        ...state,
        selectid:action.id
      };
    }
    case ActionTypes.Selectmoreid:
    {
      let count=0;
      console.log('多选',action.id)
      const newselectmoreid = state.selectmoreid.slice();
      for(let i=0;i<newselectmoreid.length;i++){
        if(newselectmoreid[i]!=action.id){
          count++;
        }
        // if(newselectmoreid[i]==action.id){
        //   newselectmoreid.pop(i)
        // }
      }
      if(count>=newselectmoreid.length){
        newselectmoreid.push(action.id)
      }
      return {
        ...state,
        selectmoreid:newselectmoreid
      };
    }
    default:
      return state;
  }
}
export default combineReducers({
  music,
  operation
});
