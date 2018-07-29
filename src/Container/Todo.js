import React, { Component } from 'react';
import MessageItemView from '../Components/MessageItem.js';
import DialogView from '../Components/DialogView.js';
import DialogViewMore from '../Components/DialogViewMore.js';
import HeaderView from '../Components/HeaderView.js';
import Blank from '../Components/Blank.js';
import Footer from '../Components/Footer.js';
import VipItem from '../Components/VipItem.js';
import './Todo.css';
import { connect } from 'react-redux'
import * as todoActionCreators from '../actions'
import { bindActionCreators } from 'redux';

const img6=require("../source/添加.svg");

 class Todo extends Component {

  constructor(props){
    super(props);
  }

  
  // onHeadClick = () => {
  //   this.setState(
  //     {
  //       isDialogActive:true,
  //       tianjia:true
  //     }
  //   )
  //      }
       

      // selectdelect=()=>{
      //   const newMessages = this.state.messages.slice();
      //   for(let i=this.arr.length;i>=0;i--)
      //   {
      //     if(this.arr[i]==true)
      //     {
      //       newMessages.splice(i,1);
      //     }
      //   }
      //   this.setState({
      //     messages: newMessages,
      //     duoxuan:false,
      //     //select:false
      //   });
      // }


  // handleShowDialog = (isActive,isjia) => {
  //   this.setState({ isDialogActive: isActive,tianjia:isjia });
  // }
  
  // renderheader=()=>{
  //   const { todoActions } = this.props;
  //   const { Item, Dialog } = this.props;
  //   const head=this.state.header.map((item,idx)=>{
  //     return <HeaderView key={idx} item={item} todoActions={todoActions} list={Item.header}/*onClick={this.onHeadClick}*//>
  //   });
  //   return head;
  // }


  //  VipItem = () => {
  //   const { todoActions } = this.props;
  //   const { Item,vip } = this.props;
  //   const {isDialogActive} = this.props;
  //   const vipi =vip.map((item,i) => {
  //     return <VipItem idx={i} item={item}
  //      isDialogActive={isDialogActive}
  //        todoActions={todoActions}
  //        list={Item.vip}
  //         />
  //   });
  //   return vipi;
  // }


  addDialog = () => {
    const { tianjia,isDialogActive} = this.props;
    const { todoActions,state } = this.props;
    const { Item, Dialog } = this.props;
    //console.log(state.isDialogActive)
    if(!Dialog.tianjia) {
      return <DialogViewMore  todoActions={todoActions} Item={Item} Dialog={Dialog}/*onCloseClick={this.handleShowDialog} onClick={this.onDialogViewClick} onshanchuClick={this.shanchu} onzhidingClick={this.zhiding} onduoxuanClick={this.duoxuan}*//>;
    }else {
    return <DialogView todoActions={todoActions} Item={Item} Dialog={Dialog}/*onCloseClick={this.handleShowDialog} onClick={this.onDialogViewClick}*/ />
    }
  }
  render() {
    const { todoActions,state } = this.props;
    const { Item, Dialog } = this.props;
    const {isDialogActive,tianjia,duoxuan} = this.props;
    return (
      <div className="main">
        <div className="header" >
        
         <HeaderView  todoActions={todoActions} state={state} Item={Item} Dialog={Dialog}/>
        
        </div>
        
        
        <MessageItemView
        state={state}
        isDialogActive={isDialogActive}
        tianjia={tianjia}
         duoxuan={duoxuan}
         todoActions={todoActions}
         Item={Item} Dialog={Dialog}
         />

        <Blank state={state} Item={Item} Dialog={Dialog} todoActions={todoActions}/>
        <Footer />
        {this.addDialog()}
      
      </div>
    );
  }
}

function mapStateToProps(state,ownProps){
  // state.list;
  //return{...state}
  const{Item,Dialog}=state;
return {Item,Dialog}
  /*const props = { list:null };
  props.list = state.list;
  return props;*/
}

function mapDispatchToProps(dispatch){
  return{
    todoActions:bindActionCreators(todoActionCreators, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Todo);

