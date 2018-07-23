import React, { Component } from 'react';
export default class Blank extends Component {
    onClick=()=>{
        const { onClick, select ,idx} = this.props;
        if (onClick) {
            onClick();
        }
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