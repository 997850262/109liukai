import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MessagesView from './Message.js';
import ButtonView from './button.js';
import ShowDialog from './DialogView.js';
import Headerview from './header.js';

const img1=require("./source/发现.svg");
const img2=require("./source/微信.svg");
const img3=require("./source/微信支付.svg");
const img4=require("./source/我.svg");
const img5=require("./source/搜索.svg");
const img6=require("./source/添加.svg");
const img7=require("./source/美团.svg");
const img8=require("./source/腾讯新闻.svg");
const img9=require("./source/通讯录.svg");



class App extends Component {
  constructor(props){
    super(props);
    this.state={
      header:[
        {
        head:"微信",
        img:img5,
        
        },
        {
        img:img6,
        }
      ],
      message:[
      {
      img:img8,
      name:"腾讯新闻",
      word:"hello world",
      time:"早上10:00",
      },
      {
        img:img3,
        name:"微信支付",
        word:"hello world!",
        time:"中午12:05",
      },
      {
        img:img7,
        name:"美团助手",
        word:"hello world!!",
        time:"下午5:00",
      }
    ],
    button:[
      {
      img:img2,
      name:"微信",
      },
      {
        img:img9,
        name:"通讯录",
      },
      {
        img:img1,
        name:"发现",
      },
      {
        img:img4,
        name:"我",
      }

    ],
    ShowDialog:false
      }
  }
  onItemClick=(Message)=>{
console.log(Message);
this.setState(
  {
    ShowDialog:true
  }
)
    }
  onbuttonClick=(button)=>{
    console.log(button.name);
    }


renderDailogView=()=>{
  if(this.setState.ShowDialog)
  return null;
}
renderheader=()=>{
  const head=this.state.header.map((item,idx)=>{
    return <Headerview key={idx} item={item} />
  });
  return head;
}
renderMessage=()=>{
  const msg=this.state.message.map((item,idx)=>{
    return <MessagesView key={idx} item={item} onClick={this.onItemClick} />
  });
  return msg;
}

renderbutton=()=>{
  const button=this.state.button.map((item,idx)=>{
    return <ButtonView key={idx} item={item} onClick={this.onbuttonClick} />
  });
  return button;
}

  render() {
    return (
      <div>
        <div id="hd">
        {
         this.renderheader()
        }
        </div>
        <div id="Dialog">
      {
      this.renderDailogView()
      }
        </div>
        <div id="item">
      {
        this.renderMessage()
      }
        </div>
        <div id="button">
      {
        this.renderbutton()
      }
        </div>
      </div>
      /*<div className="all">
        <div className="header">
          <span>微信</span>
          <img src="搜索.svg" alt="搜索" />
          <img src="添加.svg" alt="添加" />
        </div>
        <div className="main">
          <div className="content" id="item1" onclick="printf(0)">
            <img src="腾讯新闻.svg" alt="腾讯新闻" id="img1" />
            <div>
              <span className="name" id="name1">腾讯新闻</span>
              <span className="time" id="time1">早上10:00</span>
              <br/>
                <span className="word" id="word1">hello world</span>
            </div>
          </div>
            <div className="content" id="item2" onclick="printf(1)">
              <img src="微信支付.svg" alt="微信支付" id="img2" />
              <div>
                <span className="name" id="name2">微信支付</span>
                <span className="time" id="time2">中午12:05</span>
                <br/>
                  <span className="word" id="word2">hello world!</span>
              </div>
            </div>
            <div className="content" id="item3" onclick="printf(2)">
              <img src="美团.svg" alt="美团" id="img3" />
              <div>
                <span className="name" id="name3">美团助手</span>
                <span className="time" id="time3">下午5:00</span>
                <br/>
                  <span className="word" id="word3">hello world!!</span>
              </div>
            </div>
        </div>
              <div className="footer">
                <ul>
                  <li>
                  <img src="微信.svg" alt="微信" />
                  <br/>
                  <span className="i1">微信</span>
                  </li>
                  <li>
                  <img src="通讯录.svg" alt="通讯录" />
                  <br/>
                  <span className="i2">通讯录</span>
                  </li>
                  <li>
                  <img src="发现.svg" alt="发现" />
                  <br/>
                  <span className="i3">发现</span>
                  </li>
                  <li>
                  <img src="我.svg" alt="我" />
                  <br/>
                  <span className="i4">我</span>
                  </li>
                </ul>
              </div>
      </div>*/

                    );
                  }
                }
                
                export default App;
