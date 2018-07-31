import React, { Component } from 'react';
import './Head.css';
import { Avatar } from 'antd';
import { Input } from 'antd';
import {messages} from '../../const/Authormestypes'
import * as api from '../../api/index';

// const icon=require("../../source/icon_Good_B-2.png")
export default class Head extends Component {

  getdata=()=>{
    const{dispatch}=this.props;
    api.getuser(dispatch);
    api.getlesson(dispatch);
  }

  render(){
    const{dispatch,Authormessages,state}=this.props;
    return(
    <div className="head">
      {/* <div className="touxiang"> */}
      <div className="touxiang" onClick={this.getdata}>
        <Avatar shape="square" size="large" icon="user" src={require("../../source/icon_Good_B-2.png")} style={{height:"80px",width:"80px"}}/>
      </div>
      <div className="message1">
        <div>{Authormessages.list[0].nick}</div>
        <div>{messages.mid}:{Authormessages.list[0].mid}</div>
        <div>{messages.learningLesson}:{Authormessages.list[0].learningLesson}</div>
        <div>{messages.enterDate}:{Authormessages.list[0].enterDate}</div>
      </div>
      <div className="message2">
        <div>{messages.history_pay}:{Authormessages.list[0].history_pay}</div>
        <div>{messages.totalLearningDays}:{Authormessages.list[0].totalLearningDays}</div>
        <div>{messages.lastLoginDate}:{Authormessages.list[0].lastLoginDate}</div>
      </div>
      <div className="message3">
        <div>{messages.tel}:{Authormessages.list[0].tel}</div>
        <div className="message3-1">
          <div>{messages.weiChatCode}:</div>
          <div><Input size="small"placeholder="请输入微信号码" /></div>
          <div><button type="primary">提交</button></div>
        </div>
        <div className="message3-2">
          <div className="message3-2-1">{messages.remark}:</div>
          <div><Input size="small" placeholder="备注" /></div>
          <div><button type="primary">提交</button></div>
        </div>
      </div>
    </div>
    )

}
}
