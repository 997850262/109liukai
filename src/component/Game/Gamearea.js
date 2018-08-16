import React, { Component } from 'react';
import './Game.css';
/* eslint-disable */

// const KEY_RETURN = [87,65,83,68];//W A S D
export default class Gamearea extends Component {
  constructor(props) {
    super(props);
  }
  rendergamebtn=()=>{
    const{data}=this.props;
    let{color}=this.props
    // console.log('渲染按钮的值',data)
    return data.map((n,hang)=>{
    // console.log(hang)
    return  n.map((num,lie)=>{
      // console.log(lie)
      // console.log('内容',data[hang][lie])
      if(data[hang][lie]>0){
        if(num==4){color='green'}
        else if(num==8){color='orange'}
        else if(num==16){color='red'}
        return (
          <div className="btn1-1" style={{ background: `${color}` }}>{data[hang][lie]}</div>
        )
      }
      else
        return (
          <div className="btn1-1"></div>
        )
      })
    })
  }
  // listenReturnKeyDown=event=>{
  //   console.log('监听键盘',KEY_RETURN[0])
  //   const{todoActions}=this.props;
  //   switch(event.keyCode){
  //     case 87:
  //         alert("W");
  //         break;
  //     case 65:
  //         alert("A");
  //         break;
  //     case 83:
  //         alert("S");
  //         break;
  //     case 68:
  //         alert("D");
  //         break;
  // }
  // }
  render() {
    const{data}=this.props;
    console.log('游戏区域',data)
    return (
        <div className="game-all">
        {this.rendergamebtn()}
           
        </div>
    );
  }
}
