import React, { Component } from 'react';
import Tab from '../Components/Tab.js';
import Item from '../Components/Item.js';
import './ListItem.css';

// const icon = require('./resource/icon_Good_B-2.png');

import icon from '../source/勾.png';
import ic1 from '../source/对勾1.png';
import ic2 from '../source/对勾2.png';
import ic3 from '../source/对勾3.png';
import ic4 from '../source/对勾4.png';
import icon1 from '../source/圆圈.png';
import icon2 from '../source/圆圈2.png';
import icon3 from '../source/圆圈3.png';
import icon4 from '../source/圆圈4.png';

export default class ListItem extends Component {

  constructor(props){
    super(props);
    this.arr=new Array(4)
    this.arr1=new Array(4)
    this.state = {
            messages:[
            {
                title:"微信",
                //color:false
                color1:false,
                color2:false,
                color3:false,
                color4:false,
                arr:[icon1,icon2,icon3,icon4],
                arr1:[ic1,ic2,ic3,ic4]
            },
            {
                title:"通讯录",
                //color:false
                color1:false,
                color2:false,
                color3:false,
                color4:false,
                arr:[icon1,icon2,icon3,icon4],
                arr1:[ic1,ic2,ic3,ic4]
            },
            {
                title:"发现",
                //color:false
                color1:false,
                color2:false,
                color3:false,
                color4:false,
                arr:[icon1,icon2,icon3,icon4],
                arr1:[ic1,ic2,ic3,ic4]
            },
            {
                title:"我",
                //color:false
                color1:false,
                color2:false,
                color3:false,
                color4:false,
                arr:[icon1,icon2,icon3,icon4],
                arr1:[ic1,ic2,ic3,ic4]
            }
            ],
        /*color1:false,
        color2:false,
        color3:false,
        color4:false*/
    }
    // this.arr=new Array(4)
    // this.arr1=new Array(4)
    // this.arr[0]=icon1;
    // this.arr[1]=icon2;
    // this.arr[2]=icon3;
    // this.arr[3]=icon4;
    // this.arr1[0]=ic1;
    // this.arr1[1]=ic2;
    // this.arr1[2]=ic3;
    // this.arr1[3]=ic4;
    let temp;
    let temp1;
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
    //  this.arr[0] =[this.state.messages[this.indexs].color1];
    //  this.arr[1] =[this.state.messages[this.indexs].color2];
    //  this.arr[2] =[this.state.messages[this.indexs].color3];
    //  this.arr[3] =[this.state.messages[this.indexs].color4];
    //  for(let i=0;i<=3;i++)
    //  {
    //      if(this.arr[i]==true)
    //      //this.arr[i].unshift(this.arr[0]);
    //      {
             
    //      }
    //  }
     //console.log(this.arr)


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
     if(this.state.messages[this.indexs].color2==true)
     {
        this.temp=this.state.messages[this.indexs].arr[0];
        this.state.messages[this.indexs].arr[0]=this.state.messages[this.indexs].arr[1]
        this.state.messages[this.indexs].arr[1]=this.temp
        this.temp1=this.state.messages[this.indexs].arr1[0];
        this.state.messages[this.indexs].arr1[0]=this.state.messages[this.indexs].arr1[1]
        this.state.messages[this.indexs].arr1[1]=this.temp1
        // this.arr[2].unshift(this.arr[0]);
     }
     this.setState({
        this:this.state.messages[this.indexs].color1=true,
        this:this.state.messages[this.indexs].color2=false
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
     if(this.state.messages[this.indexs].color3==true)
     {
        this.temp=this.state.messages[this.indexs].arr[0];
        this.state.messages[this.indexs].arr[0]=this.state.messages[this.indexs].arr[2]
        this.state.messages[this.indexs].arr[2]=this.state.messages[this.indexs].arr[1]
        this.state.messages[this.indexs].arr[1]=this.temp
        this.temp1=this.state.messages[this.indexs].arr1[0];
        this.state.messages[this.indexs].arr1[0]=this.state.messages[this.indexs].arr1[2]
        this.state.messages[this.indexs].arr1[2]=this.state.messages[this.indexs].arr1[1]
        this.state.messages[this.indexs].arr1[1]=this.temp1
        // this.arr[2].unshift(this.arr[0]);
     }
     this.setState({
        this:this.state.messages[this.indexs].color1=true,
        this:this.state.messages[this.indexs].color3=false
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
     if(this.state.messages[this.indexs].color4==true)
     {
        this.temp=this.state.messages[this.indexs].arr[0];
        this.state.messages[this.indexs].arr[0]=this.state.messages[this.indexs].arr[3]
        this.state.messages[this.indexs].arr[3]=this.state.messages[this.indexs].arr[2]
        this.state.messages[this.indexs].arr[2]=this.state.messages[this.indexs].arr[1]
        this.state.messages[this.indexs].arr[1]=this.temp
        this.temp1=this.state.messages[this.indexs].arr1[0];
        this.state.messages[this.indexs].arr1[0]=this.state.messages[this.indexs].arr1[3]
        this.state.messages[this.indexs].arr1[3]=this.state.messages[this.indexs].arr1[2]
        this.state.messages[this.indexs].arr1[2]=this.state.messages[this.indexs].arr1[1]
        this.state.messages[this.indexs].arr1[1]=this.temp1
        // this.arr[2].unshift(this.arr[0]);
     }
     this.setState({
        this:this.state.messages[this.indexs].color1=true,
        this:this.state.messages[this.indexs].color4=false
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

// selectcolor=(idx)=>{
//   this.idx=idx;
//   switch(this.state.messages[idx].arr1[0]){
//     case ic1 :const color='red';
//     case ic2 :const color='yellow';
//     case ic3 :const color='blue';
//     case ic4 :const color='green';
//   }
// }

  render() {
    return (
        <div className="main">
        <Item messages={this.state.messages}
        onClick1={this.setColor1}
        onClick2={this.setColor2}
        onClick3={this.setColor3}
        onClick4={this.setColor4}
        onUnshift={this.unshift}
        // arr={this.arr}
        // arr1={this.arr1}
        // color1={this.state.color1}
        // color2={this.state.color2}
        // color3={this.state.color3}
        // color4={this.state.color4}
        />
        <Tab messages={this.state.messages}
        onClick={this.selectcolor}/>
        </div>
    );
  }
}
