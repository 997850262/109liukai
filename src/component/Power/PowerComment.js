import React, { Component } from 'react';
import './PowerComment.css';

export default class PowerComment extends Component {
/* eslint-disable */
  constructor(props) {
    super(props);
  }
      openitem=() => {
        this.props.openitem();
      }
      render() {
        return (
          <div className="PowerComment-all">
            <div className="PowerComment-1">
                点评作业:拥有个人点评页,可以为学生作业进行点评
                <button className="PowerComment-btn1" onClick={this.openitem}>权限管理</button>
            </div>
            <div className="PowerComment-2">
                带客老师:拥有审核点评老师点评内容的权限,包括撤回点评,自行点评
                <button className="PowerComment-btn2">权限管理</button>
            </div>
          </div>
        );
      }
}
