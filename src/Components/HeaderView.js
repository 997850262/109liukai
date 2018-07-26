import React, { Component } from 'react';
import { handleShowDialog } from '../actions/index'
const img=require("../source/添加.svg");
export default class HeaderView extends Component{
  handleShowDialog=()=>{
    const {isDialogActive,tianjia} =this.props
    const {state, todoActions} = this.props;
    todoActions.handleShowDialog()
    // this.setState(
    //   {
    //     isDialogActive:true,
    //     tianjia:true
    //   }
    // )

    }


      render(){
        const {item}=this.props
        return(
          <div className="header" id="hd">
          <span>微信</span>
          <img src={img} alt="添加" onClick={this.handleShowDialog.bind(this)} />
          {/* <img src={item.img} alt="搜索" /> */}

        </div>
)

}       
}