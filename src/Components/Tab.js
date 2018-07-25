import React, { Component } from 'react';
import './Item.css';
import icon from '../source/icon_Good_B-2.png';
export default class Tab extends Component{

    render(){
      const {messages,onClick}=this.props

      return(
        <nav className="chat-nav">
        
        <div className="chat-nav__item" >
          <img className="chat-nav__item__icon" src={icon} alt="" />
          <div className="item__namecolor">
          <span className={`tab1`}>微信</span>
          {/* <span className={`tab1 ${color}-text`}>微信</span> */}
          </div>
        </div>
        <div className="chat-nav__item">
          <img className="chat-nav__item__icon" src={icon} alt="" />
          <div className="item__namecolor"><span className="tab2">通讯录</span></div>
        </div>
        <div className="chat-nav__item">
          <img className="chat-nav__item__icon" src={icon} alt="" />
          <div className="item__namecolor"><span className="tab3">发现</span></div>
        </div>
        <div className="chat-nav__item" >
          <img className="chat-nav__item__icon" src={icon} alt="" />
          <div className="item__namecolor"><span className="tab4">我</span></div>
        </div>
      </nav>
      )
            
    }
}