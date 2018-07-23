import React, { Component } from 'react';


export default class HeaderView extends Component{
  handleShowDialog=()=>{
    const {onClick,item} =this.props
    if(onClick)
    {
    onClick (item)
    }

    }


      render(){
        const {item}=this.props
        return(
          <div className="header" id="hd">
          <span>微信</span>
          <img src={item.imga} alt="添加" onClick={this.handleShowDialog.bind(this, true)} />
          {/* <img src={item.img} alt="搜索" /> */}

        </div>
)

}       
}