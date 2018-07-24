import React, { Component } from 'react';
import Tab from '../Components/Tab.js';
import Item from '../Components/Item.js';
import './ListItem.css';

// const icon = require('./resource/icon_Good_B-2.png');

import icon from '../source/icon_Good_B-2.png';

export default class ListItem extends Component {

  constructor(props){
    super(props);

    this.state = {
            messages:[
            {
                title:"微信",
                //color:false
                color1:false,
                color2:false,
                color3:false,
                color4:false
            },
            {
                title:"通讯录",
                //color:false
                color1:false,
                color2:false,
                color3:false,
                color4:false
            },
            {
                title:"发现",
                //color:false
                color1:false,
                color2:false,
                color3:false,
                color4:false
            },
            {
                title:"我",
                //color:false
                color1:false,
                color2:false,
                color3:false,
                color4:false
            }
            ],
        /*color1:false,
        color2:false,
        color3:false,
        color4:false*/
    }
    this.arr=new Array(this.state.messages.length)
  }
  setColor1=(idx)=>{
    this.indexs=idx
    //console.log(this.indexs)
     this.setState({
        this:this.state.messages[this.indexs].color1=!this.state.messages[this.indexs].color1,
        this:this.state.messages[this.indexs].color2=false,
        this:this.state.messages[this.indexs].color3=false,
        this:this.state.messages[this.indexs].color4=false
    //     color1:!this.state.messages.color1,
    //     color2:false,
    //     color3:false,
    //     color4:false
     })

    //  this.arr[this.indexs] =[
    // this.state.messages[this.indexs].color1,
    //  this.state.messages[this.indexs].color2,
    //  this.state.messages[this.indexs].color3,
    //  this.state.messages[this.indexs].color4];
    //  for(let i=0;i<=this.state.messages.length;i++)
    //  {
    //      if(this.arr[i]==true)
    //      this.arr[i].unshift(this.arr[0]);
    //  }


     //console.log(this.state.messages[this.indexs].color1)
     this.indexs=null;
  }
  setColor2=(idx)=>{
      this.indexs=idx
    this.setState({
        this:this.state.messages[this.indexs].color1=false,
        this:this.state.messages[this.indexs].color2=!this.state.messages[this.indexs].color2,
        this:this.state.messages[this.indexs].color3=false,
        this:this.state.messages[this.indexs].color4=false
     })
     this.indexs=null;
  }
  setColor3=(idx)=>{
    this.indexs=idx
    this.setState({
        this:this.state.messages[this.indexs].color1=false,
        this:this.state.messages[this.indexs].color2=false,
        this:this.state.messages[this.indexs].color3=!this.state.messages[this.indexs].color3,
        this:this.state.messages[this.indexs].color4=false
     })
     this.indexs=null;
  }
  setColor4=(idx)=>{
    this.indexs=idx
    //console.log(this.indexs)
    this.setState({
        this:this.state.messages[this.indexs].color1=false,
        this:this.state.messages[this.indexs].color2=false,
        this:this.state.messages[this.indexs].color3=false,
        this:this.state.messages[this.indexs].color4=!this.state.messages[this.indexs].color4
     })
     this.indexs=null;
  }

  unshift=(idx)=>{
      this.index=idx;
      //console.log(this.index)
    if(this.index!=null)
    {
      const newMessages = this.state.messages.slice();
      const a=newMessages.splice(this.index,1);
      newMessages.unshift(a[0]);
      this.setState({
        messages: newMessages
      });
    }
    this.index=null;
  }
//   renderMessageList = () => {
//     const messageViews = this.state.messages.map((item,i) => {
//       return <Item idx={i} item={item} />
//     });
//     return messageViews;
//   }
  render() {
    return (
        <div className="main">
        <Item messages={this.state.messages}
        onClick1={this.setColor1}
        onClick2={this.setColor2}
        onClick3={this.setColor3}
        onClick4={this.setColor4}
        onUnshift={this.unshift}
        // color1={this.state.color1}
        // color2={this.state.color2}
        // color3={this.state.color3}
        // color4={this.state.color4}
        />
        <Tab />
        </div>
    );
  }
}
