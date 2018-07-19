import React from 'react';
import MessageItemView from './MessageItem.js';
import DialogView from './DialogView.js';
import HeaderView from './HeaderView.js';
import fuxuan from './fuxuan.js';
import './App.css';

// const icon = require('./resource/icon_Good_B-2.png');

import icon from './source/icon_Good_B-2.png';
// const img5=require("./source/搜索.svg");
const img6=require("./source/添加.svg");

class App extends React.Component {

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
      messages: [
        {
          icon: icon,
          title: '小年糕',
          descript: 'hello 小年糕',
          time: '7-18 11:14'
        },
        {
          icon: icon,
          title: '小板凳',
          descript: 'hello 小板凳',
          time: '7-18 11:15',
        },
        {
          icon: icon,
          title: '小豆包',
          descript: 'hi 小豆包',
          time: '7-17 10:00',
        }
      ],
      isDialogActive: false
    }
  }

  onItemClick = (message) => {
    console.log(message);
  }
  
  onHeadClick = () => {
    this.setState(
      {
        isDialogActive:true
      }
    )
       }
       onDialogViewClick = () => {
        const newMessages = this.state.messages.slice();
        newMessages.unshift({
          icon: icon,
          title:1,
          descript:2,
          time:3
        });
        this.setState({
          messages: newMessages
        });
      }
        
           

  // handleAddItem = () => {
  //   const newMessages = this.state.messages.slice();
  //   newMessages.unshift({
  //     icon: icon,
  //     title:1,
  //     descript:2,
  //     time:3
  //   });
  //   this.setState({
  //     messages: newMessages
  //   });
  // }

  handleShowDialog = isActive => {
    this.setState({ isDialogActive: isActive });
    const Dialog=this.state.header.map((item,idx)=>{
      return <DialogView key={idx} item={item} onClick={this.onDialogViewClick}/>
    });
    return Dialog;
  }
  
  renderheader=()=>{
    const head=this.state.header.map((item,idx)=>{
      return <HeaderView key={idx} item={item} onClick={this.onHeadClick}/>
    });
    return head;
  }
  renderMessageList = () => {
    const messageViews = this.state.messages.map((item,i) => {
      return <MessageItemView key={i} item={item} onClick={this.onItemClick}/>
    });
    return messageViews;
  }


  render() {
    return (
      <div className="main">
              <div className="header" >
        {
         this.renderheader()
        }
        </div>
        { this.renderMessageList() }
        <nav className="chat-nav">
          <div className="chat-nav__item" >
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">微信</div>
          </div>
          <div className="chat-nav__item">
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">通讯录</div>
          </div>
          <div className="chat-nav__item">
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">发现</div>
          </div>
          <div className="chat-nav__item" >
            <img className="chat-nav__item__icon" src={icon} alt="" />
            <div className="chat-nav__item__name">我</div>
          </div>
        </nav>
        <DialogView isActive={this.state.isDialogActive} onCloseClick={this.handleShowDialog} onClick={this.onDialogViewClick}/>
      </div>
    );
  }
}

export default App;
