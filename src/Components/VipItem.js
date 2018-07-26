import React, { Component } from 'react';
import { addTodo as AddTodoCreator } from '../actions'
export default class VipItem extends Component {

    render(){
        const { item} = this.props;
            return (<li className="chat-list__item">
              <img className="chat-list__item__avatar" src={item[0].icon} alt="" />
              <div className="chat-list__item__content">
                <div className="chat-list__item__content__topBar">
                  <h2 className="chat-list__item__content__title">{item[0].title}</h2>
                  <div className="chat-list__item__content__time">{item[0]['time']}</div>
                </div>
                <div className="chat-list__item__content__recentMsg">{item[0]['descript']}</div>
              </div>
            </li>)
}
}