import React, { Component } from 'react';


export default class button extends Component{

    onItemClick=()=>{
        const {onClick,item} =this.props
        if(onClick)
        {
        onClick (item)
        }
        /*return;*/
        }

                render(){
const {item}=this.props
return(
<div className="header" id="hd">
          <span>微信</span>
          <img src={item.img} alt="搜索" />
          {/* <img src={item.img} alt="添加" /> */}
        </div>
)

}       
}