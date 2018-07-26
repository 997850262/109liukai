import React, { Component } from 'react';
import '../Container/Todo.css';
import { more } from '../actions/index'
import { duoxuan } from '../actions/index'
const icon = require('../source/icon_Good_B-2.png');
export default class MessageItem extends Component {
  /*onMsgClick = () => {
    const { onClick, item } = this.props;
    if (onClick) {
      onClick(item);
    }
  }*/
  onfxClick = (idx,event) => {
    const {isDialogActive,tianjia,todoActions,state } = this.props;
    // if (onClick) {
    //   onClick(item,idx);
    // }
    //this.index=idx;
    todoActions.onfxClick(idx)
      
  }
  duoxuanonClick=(e)=>{
    // const { onduoxuanClick, item,idx } = this.props;
    // onduoxuanClick(idx,e.target.checked);
    const{isDialogActive,duoxuan,todoActions}= this.props;
    //this.arr[idx] = checked;
    todoActions.duoxuan();
  }

  addInput = () => {
    const { state } = this.props;
    if(!state.duoxuan) {
      return null;
    }else {
      return <input className="notselect" type="checkbox" onClick={this.duoxuanonClick} />
    }
  }

  render(){
    const { state} = this.props;
    return(
      <div className="body">
        {
      state.messages.map((item,idx)=>{
        return(
        <li className="chat-list__item">
          {this.addInput()}
          <img className="chat-list__item__avatar" src={item.icon} alt="" />
          <div className="chat-list__item__content">
            <div className="chat-list__item__content__topBar">
              <h2 className="chat-list__item__content__title">{item.title}</h2>
              <div className="chat-list__item__content__time">{item['time']}</div>
            </div>
            <div className="chat-list__item__content__recentMsg">{item['descript']}</div>
            <div className="gengduo" onClick={()=>this.onfxClick(idx)}>更多</div>
          </div>
        </li>
        )
      })
    }
      </div>
    );

}
}
