import React, { Component } from 'react';
import './Head.css';
import { Avatar } from 'antd';
import { Input } from 'antd';
import {messages} from '../../const/Authormestypes'

// const icon=require("../../source/icon_Good_B-2.png")
export default class Head extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const{todoActions,Authormessages,state}=this.props;
    return(
    <div className="head">
      <div className="touxiang">
        <Avatar shape="square" size="large" icon="user" src={require("../../source/icon_Good_B-2.png")} />
      </div>
      <div className="message1">
        <div>{Authormessages.list[0].name}</div>
        <div>{messages.id}:{Authormessages.list[0].id}</div>
        <div>{messages.learning}:{Authormessages.list[0].learning}</div>
        <div>{messages.starttime}:{Authormessages.list[0].starttime}</div>
      </div>
      <div className="message2">
        <div>{messages.pay}:{Authormessages.list[0].pay}</div>
        <div>{messages.time}:{Authormessages.list[0].time}</div>
        <div>{messages.lastlogin}:{Authormessages.list[0].lastlogin}</div>
      </div>
      <div className="message3">
        <div>{messages.phonenum}:{Authormessages.list[0].phonenum}</div>
        <div className="message3-1">
          <div>{messages.wxnum}:</div>
          <div><Input size="small"placeholder="请输入微信号码" /></div>
          <div><button type="primary">提交</button></div>
        </div>
        <div className="message3-2">
          <div>{messages.beizhu}:</div>
          <div><Input size="small" placeholder="备注" /></div>
          <div><button type="primary">提交</button></div>
        </div>
      </div>
    </div>
    )

}
}
