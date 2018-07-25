import React, { Component } from 'react';
import { addTodo } from '../../actions'

export default class HeaderView extends Component{
  handleShowDialog=()=>{
    const {isDialogActive,tianjia} =this.props
    this.setState(
      {
        isDialogActive:true,
        tianjia:true
      }
    )

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