import React from 'react';
import './Head.css';
/* eslint-disable */
const img=require("../../source/return.png");
export default class Head extends React.Component {
  handleback=()=>{
    alert('go back');
  }
  handleover=()=>{
    alert('当前选中了[213, 987, 776]');
  }
  render() {
    const{music}=this.props;
    console.log(music.music.data)
    console.log(music.music.data.token)
    return (
        <div className="Head-all">
            <div className="Head-back">
            <img src={img} className="Head-img"/>
            <div onClick={this.handleback}>我</div>
            </div>
            <div className="Head-name">{music.music.data.nick}</div>
            <div className="Head-over" onClick={this.handleover}>完成</div>
        </div>

    );
  }
}