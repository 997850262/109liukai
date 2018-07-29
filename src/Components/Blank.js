import React, { Component } from 'react';
import { duoxuan } from '../actions'
export default class Blank extends Component {
    onClick=()=>{
        const{todoActions}=this.props;
        todoActions.selectdelect();
        todoActions.blankDuoxuan();
      }


render(){
const {Dialog} = this.props;
if(!Dialog.duoxuan)
{return null}
else{
return(
<input type="button" value="删除" onClick={this.onClick}/>
);
}
}
}