import React, { Component } from 'react';

export default class MessageItem extends Component {
  /*onMsgClick = () => {
    const { onClick, item } = this.props;
    if (onClick) {
      onClick(item);
    }
  }*/
  onfxClick = () => {
    const { onClick, item,idx } = this.props;
    if (onClick) {
      onClick(item,idx);
    }
  }
  duoxuanonClick=(e)=>{
    const { onduoxuanClick, item,idx } = this.props;
    onduoxuanClick(idx,e.target.checked);
  }

  addInput = () => {
    const { duoxuan } = this.props;
    if(!duoxuan) {
      return null;
    }else {
      return <input className="notselect" type="checkbox" onClick={this.duoxuanonClick} />
    }
  }

  render(){
    const { item ,duoxuan,select} = this.props;
    //this.idx=new Array[]
    // if (!duoxuan) {
    return(
      <li className="chat-list__item" onClick={this.onMsgClick}>
      {this.addInput()}
        <img className="chat-list__item__avatar" src={item.icon} alt="" />
        <div className="chat-list__item__content">
          <div className="chat-list__item__content__topBar">
            <h2 className="chat-list__item__content__title">{item.title}</h2>
            <div className="chat-list__item__content__time">{item['time']}</div>
          </div>
          <div className="chat-list__item__content__recentMsg">{item['descript']}</div>
          <div className="gengduo" onClick={this.onfxClick}>更多</div>
        </div>
      </li>
    );
  //}
/*else
{
  // if(!select)
  // {
  return(
    <li className="chat-list__item" onClick={this.onMsgClick}>
    <input className="notselect" type="checkbox" onClick={this.duoxuanonClick} />
      <img className="chat-list__item__avatar" src={item.icon} alt="" />
      <div className="chat-list__item__content">
        <div className="chat-list__item__content__topBar">
          <h2 className="chat-list__item__content__title">{item.title}</h2>
          <div className="chat-list__item__content__time">{item['time']}</div>
        </div>
        <div className="chat-list__item__content__recentMsg">{item['descript']}</div>
        <div className="gengduo" onClick={this.onfxClick}>更多</div>
      </div>
    </li>
  );
//}
// else
// {
//   return(
//     <li className="chat-list__item" onClick={this.onMsgClick}>
//     <input className="select" type="checkbox" onClick={this.duoxuanonClick} />
//       <img className="chat-list__item__avatar" src={item.icon} alt="" />
//       <div className="chat-list__item__content">
//         <div className="chat-list__item__content__topBar">
//           <h2 className="chat-list__item__content__title">{item.title}</h2>
//           <div className="chat-list__item__content__time">{item['time']}</div>
//         </div>
//         <div className="chat-list__item__content__recentMsg">{item['descript']}</div>
//         <div className="gengduo" onClick={this.onfxClick}>更多</div>
//       </div>
//     </li>
//   );
// }
}*/
}
}
