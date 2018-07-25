import React, { Component } from 'react';
import MessageItemView from '../Components/MessageItem.js';
import DialogView from '../Components/DialogView.js';
import DialogViewMore from '../Components/DialogViewMore.js';
import HeaderView from '../Components/HeaderView.js';
import Blank from '../Components/Blank.js';
import Footer from '../Components/Footer.js';
import './Todo.css';
import { connect } from 'react-redux'
import { addTodo as AddTodoCreator } from '../actions'
import { more } from '../actions'
import { shanchu } from '../actions'
import { zhiding } from '../actions'
import { duoxuan } from '../actions'

// const icon = require('./resource/icon_Good_B-2.png');

import icon from '../source/icon_Good_B-2.png';
// const img5=require("./source/搜索.svg");
const img6=require("../source/添加.svg");

export default class Todo extends Component {

  constructor(props){
    super(props);

    this.state = {
      header:[
        {
        head:"微信",
        // img:img5,
        imga:img6,
        }
      ],
      vip:[
        {
          icon: icon,
          title: '小年糕',
          descript: 'hello 小年糕',
          time: '7-18 11:14',
        }
      ],
      messages: [
        {
          icon: icon,
          title: '小年糕',
          descript: 'hello 小年糕',
          time: '7-18 11:14',
          //select:false,
        },
        {
          icon: icon,
          title: '小板凳',
          descript: 'hello 小板凳',
          time: '7-18 11:15',
          //select:false,
        },
        {
          icon: icon,
          title: '小豆包',
          descript: 'hi 小豆包',
          time: '7-17 10:00',
          //select:false,
        }
      ],
      isDialogActive: false,
      tianjia:false,
      duoxuan:false,

    }
    this.arr=new Array(this.state.messages.length)
  }

  // onItemClick = (message) => {
  //   console.log(message);
  // }
  
  // onHeadClick = () => {
  //   this.setState(
  //     {
  //       isDialogActive:true,
  //       tianjia:true
  //     }
  //   )
  //      }
       
      //  onDialogViewClick = obj => {
      //   //this.state={title, descript,time}=this.props
      //   const newMessages = this.state.messages.slice();
      //   newMessages.unshift({
      //     icon: icon,
      //     ...obj,
      //     /*title:obj.title,//{this.state.title}
      //     descript:obj.descript,
      //     time:obj.*/
      //   });
      //   this.setState({
      //     messages: newMessages
      //   });
      // }
      // onfuxuanClick=(item,idx)=>{
      //    this.index=idx;
      //   this.setState(
      //     {
      //       isDialogActive:true,
      //       tianjia:false
      //     })
      // }

      // shanchu=()=>{
      //   if(this.index!=null)
      //   {
      //     const newMessages = this.state.messages.slice();
      //     newMessages.splice(this.index,1);
      //     this.setState({
      //       messages: newMessages
      //     });
      //   }
      //   this.index=null;
      // }
      // zhiding=()=>{
      //   if(this.index!=null)
      //   {
      //     const newMessages = this.state.messages.slice();
      //     const a=newMessages.splice(this.index,1);
      //     newMessages.unshift(a[0]);
      //     this.setState({
      //       messages: newMessages
      //     });
      //   }
      //   this.index=null;
      // }
      // duoxuan=()=>{
        
      //   this.setState({
      //     duoxuan:true,
      //     //select:true
      //   })
      // }
      // onduoxuanClick=(idx,checked)=>{
      //   this.arr[idx] = checked;

      //   }
      

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
  
  renderheader=()=>{
    const head=this.state.header.map((item,idx)=>{
      return <HeaderView key={idx} item={item} dispatch={dispatch}/*onClick={this.onHeadClick}*//>
    });
    return head;
  }
  renderMessageList = () => {
    const messageViews = this.state.messages.map((item,i) => {
      return <MessageItemView idx={i} item={item} dispatch={dispatch} /*duoxuan={this.state.duoxuan} select={this.state.select} /*onClick={this.onItemClick}*/ onClick={this.onfuxuanClick} onduoxuanClick={this.onduoxuanClick} />
    });
    return messageViews;
  }
  // Footer=()=>{
  //     return <Footer />
  // }
  addDialog = () => {
    const { tianjia } = this.state;
    if(!tianjia) {
      return <DialogViewMore isDialogActive={this.state.isDialogActive} tianjia={this.state.tianjia} dispatch={dispatch}/*onCloseClick={this.handleShowDialog} onClick={this.onDialogViewClick} onshanchuClick={this.shanchu} onzhidingClick={this.zhiding} onduoxuanClick={this.duoxuan}*//>;
    }else {
    return <DialogView isActive={this.state.isDialogActive} isjia={this.state.tianjia} dispatch={dispatch}/*onCloseClick={this.handleShowDialog} onClick={this.onDialogViewClick}*/ />
    }
  }
  render() {
    const { dispatch } = this.props;
    const list =this.state.messages;
    return (
      <div className="main">
        <div className="header" >
        {
         this.renderheader()
        }
        </div>
        <VipItem dispatch={dispatch} vip={this.vip}/>
        { this.renderMessageList() }
        <div className="blank">
        <Blank duoxuan={this.state.duoxuan} select={this.state.select} dispatch={dispatch}/*onClick={this.selectdelect}*//>
        </div>
        <div><Footer />
        {/* {this.Footer()} */}
        </div>
        {this.addDialog()}
        {/* <DialogView isActive={this.state.isDialogActive} isjia={this.state.tianjia} onCloseClick={this.handleShowDialog} onClick={this.onDialogViewClick} />
        <DialogViewMore isActive={this.state.isDialogActive} isjia={this.state.tianjia} onCloseClick={this.handleShowDialog} onClick={this.onDialogViewClick} onshanchuClick={this.shanchu} onzhidingClick={this.zhiding} onduoxuanClick={this.duoxuan}/> */}
      </div>
    );
  }
}

function mapStateToProps(state,ownProps){
  // state.list;
  const props = { list:null };
  props.list = state.list;
  return props;
}

export default connect(mapStateToProps)(Todo);

