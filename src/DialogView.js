import React, { Component } from 'react';
import './DialogView.css';

export default class DialogView extends Component {
  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  handleClose = () => {
    this.props.onCloseClick(false);
  }

  DialogView=()=>{
    this.props.onCloseClick(false);
    const {onClick,item} =this.props
    if(onClick)
    {
    onClick (item)
    }

    }
  // handleAddItem = () => {
  //   const newMessages = this.state.messages.slice();
  //   newMessages.unshift({
  //     icon:icon,
  //     title:title,
  //     descript:descript,
  //     time:time
  //   });
  //   this.setState({
  //     messages: newMessages
  //   });
  // }

  render() {
    console.log('component render');
    const { isActive } = this.props;
    // const a=[];
    // a[0]=this.title.value;
    // a[1]=this.descript.value;
    // a[2]=this.time.value;
   
    if (!isActive) {
      return null;
    }
    return (
      <div className="mask-ctn">
        <div className="close-btn" onClick={this.handleClose}>close</div>
        <div className="dialog-ctn">
        <div>标题</div><input type="text" id="title" value="1"/>
        <div>描述</div><input type="text" id="descript" value="2"/>
        <div>时间</div><input type="text" id="time" value="3"/>
      <div className="queding" onClick={this.DialogView}>
      <input type="button" name="确定" value="确定"/>
      </div>
        </div>
      </div>
    );
  }
}

