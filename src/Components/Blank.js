import React, { Component } from 'react';
import { duoxuan } from '../actions'
export default class Blank extends Component {
    onClick=()=>{
        // const { onClick, select ,idx} = this.props;
        // if (onClick) {
        //     onClick();
        // }

        // const { arr,messages,duoxuan,dispatch} = this.props;
        // const newMessages = this.state.messages.slice();
        // for(let i=this.arr.length;i>=0;i--)
        // {
        //   if(this.arr[i]==true)
        //   {
        //     newMessages.splice(i,1);
        //   }
        // }
        // this.setState({
        //   messages: newMessages,
        //   duoxuan:false,
        //   //select:false
        // });
        const{todoActions,idx,messages,isDialogActive,duoxuan}=this.props;
        todoActions.duoxuan(idx,messages,isDialogActive,duoxuan);
      }


render(){
const {duoxuan,select} = this.props;
if(!duoxuan)
{return null}
else{
return(
<input type="button" value="删除" onClick={this.onClick}/>
);
}
}
}