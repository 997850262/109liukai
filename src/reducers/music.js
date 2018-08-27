import { combineReducers } from 'redux';
import ActionTypes from '../const/ActionTypes';
/* eslint-disable */

function music(state = {
  data:{},
  entities:{},
  result:[],
  recommendentities:{},
  recommendresult:[],
  selectid:0,
  selectmoreid:[]
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
    case ActionTypes.Selectid:
    {
      return {
        ...state,
        selectid:action.id,
      };
    }
    case ActionTypes.Selectmoreid:
    {
      let count=0;
      console.log('多选',action.id)
      const newselectmoreid = state.selectmoreid.slice();
      // console.log(state.selectid);
      // newselectmoreid.push(state.selectid);
      for(let i=0;i<newselectmoreid.length;i++){
        if(newselectmoreid[i]!=action.id){
          count++;
        }
      }
      if(count>=newselectmoreid.length&&newselectmoreid.length<5){
        newselectmoreid.push(action.id);
      }
      else{
        for(let i=0;i<newselectmoreid.length;i++){
          if(newselectmoreid[i]==action.id){
            newselectmoreid.splice(i,1);
          }
        }
      }
      return {
        ...state,
        selectmoreid:newselectmoreid
      };
    }
    case ActionTypes.Deleteone:
    {
      console.log(state.selectid)
      console.log(state)
      let newList = state.result;
      if(newList){
         newList.map((Item)=>{
          console.log(Item)
          if(state.entities.data[Item]!=undefined){
            state.entities.data[Item].list.map((item,idx)=>{
             console.log(item)
             console.log(idx)
             if(item==state.selectid){
               console.log(state.entities.data[Item].list[idx])
               state.entities.data[Item].list.splice(idx,1);
               state.selectid=0;
             }
           })
          }
        })
      }
      return {
        ...state,
      };
    }
    case ActionTypes.Deletemore:
    {
      console.log('多选删除')
      let newList = state.result;
      if(newList){
         newList.map((Item)=>{
          console.log(Item)
          if(state.entities.data[Item]!=undefined){
            state.selectmoreid.map((id,ids)=>{
            state.entities.data[Item].list.map((item,idx)=>{
             console.log(item)
              if(item==id){
                state.entities.data[Item].list.splice(idx,1);
                state.selectmoreid=[];
              }
             })
           })
          }
        })
      }
      return {
        ...state,
      };
    }
    case ActionTypes.Onselect:
    {
      const newselectid = state.selectmoreid[0]
      return {
        ...state,
        selectid:newselectid
      };
    }
    case ActionTypes.Onmoreselect:
    {
      const newselectmoreid = []
      if(state.selectid>0){
        newselectmoreid.push(state.selectid)
      }
      return {
        ...state,
        selectmoreid:newselectmoreid
      };
    }
    case ActionTypes.Rename:
    {
      console.log(123,action.name)
      console.log(123,state.entities.list[state.selectid].name)
      if(state.entities.list[state.selectid].plp==undefined){
        state.entities.list[state.selectid].name=action.name
      }
      else{
        alert('不能修改本音乐名');
      }
      return {
        ...state,
      };
    }
    case ActionTypes.Signtime:
    {
      console.log(111,action.signstartTime)
      console.log(222,action.signendTime)
      if(action.signendTime!=undefined){
        console.log('标记成功')
        state.entities.list[state.selectid].bmt=action.signstartTime
        state.entities.list[state.selectid].emt=action.signendTime
      }
      return {
        ...state,
      };
    }
    case ActionTypes.Cleansigntime:
    {
      state.entities.list[state.selectid].bmt=0
      state.entities.list[state.selectid].emt=0
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
export default combineReducers({
  music,
});
