import { ADD_TODO, CHANGE_TODO_STATUS, zhiding } from '../const/ActionTypes'
import { duoxuan } from '../actions';
const icon = require('./resource/icon_Good_B-2.png');
export default function todoList(state = { list: []},action){
  switch(action.type){
    case ADD_TODO:{
      // const newList = state.list.slice();
      // newList.unshift({
      //   text: action.text,
      //   isComplated: false
      // });
      // const newState = { ...state };
      // newState.list = newList;
      // return newState;
      const obj = { "title":action.title, "descript": action.descript, "time": action.time};
      //+验证
      const newMessages = state.messages.slice();
      newMessages.unshift({
        icon: icon,
        ...obj,
      });
      this.setState({
        messages: newMessages
      });
      return newState;
    }
    case shanchu: {
    //   const newList = state.list.slice();
    //   const { idx, isCompleted } = action;
    //   newList[idx] = {...newList[idx], isCompleted };
    //   const newState = { ...state };
    //   newState.list = newList;
    //   return newState;

            const { idx,messages  } = action;
            this.index=idx;
          const newMessages = state.messages.slice();
          newMessages.splice(this.index,1);
          this.setState({
            messages: newMessages
          });
        this.index=null;
        return newState;
    }
    case zhiding:{
      const { idx,messages  } = action;
      this.index=idx;
      const newMessages = state.messages.slice();
          const a=newMessages.splice(this.index,1);
      const newVip = state.vip.slice();
          newVip.unshift(a[0]);
          this.setState({
            vip:newVip,
            messages: newMessages
          });
        this.index=null;
        return newState;
    }
    case duoxuan:{
      const { idx,messages  } = action;
      const newMessages = state.messages.slice();
        for(let i=this.arr.length;i>=0;i--)
        {
          if(this.arr[i]==true)
          {
            newMessages.splice(i,1);
          }
        }
        this.setState({
          messages: newMessages,
          duoxuan:false,
          //select:false
        });
        return newState;
    }
    default:
    return state;
  }
}
