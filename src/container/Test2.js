import React from 'react';
import Dialog from '../component/Weui/Dialog';
import '../component/Weui/Dialog.css'
export default class Test2 extends React.Component {
  state = {
    type:{},       // 显示类型：iOS or Android（参看weui: https://weui.io/#dialog）
    isActive:false,   // 控制显示与否
    title:'',      // title文字
    okText:true,     // 可定制，默认值为“确定”
    cancelText:false, // 可定制，默认值为“取消”
    content:''
  };

  handleShowios1 = () => {
    this.setState({
      type:{key:'ios1'},
      isActive:true,
      title:'弹窗标题',
      content:'弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'
    });
  }
  handleShowios2 = () => {
    this.setState({
      type:{key:'ios2'},
      isActive:true,
      title:'',
      content:'弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'
    });
  }
  handleShowAndroid1 = () => {
    this.setState({
      type:{key:'Android1'},
      isActive:true,
      title:'弹窗标题',
      content:'弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'
    });
  }
  handleShowAndroid2 = () => {
    this.setState({
      type:{key:'Android2'},
      isActive:true,
      title:'',
      content:'弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内'
    });
  }

  handleonDialog= () => {//确定
    this.setState({
      isActive: false      
    });
  }
  handlecancelDialog = () => {//取消
    this.setState({
      isActive: false
    });
  }

  render() {
    return (
      <div className="ios-button">
        <div onClick={this.handleShowios1}>
        <button className="Android-button"> ios Dialog样式一</button>
        </div>
        <div onClick={this.handleShowios2}>
        <button className="Android-button">ios Dialog样式二</button>
        </div>
        <div onClick={this.handleShowAndroid1}>
        <button className="Android-button">Android Dialog样式一</button>
        </div>
        <div onClick={this.handleShowAndroid2}>
        <button className="Android-button">Android Dialog样式二</button>
        </div>
        <Dialog
          type={this.state.type}
          isActive={this.state.isActive}
          title={this.state.title}
          okText={this.state.okText}
          cancelText={this.state.cancelText}
          content={this.state.content}
          onOk={this.handleonDialog}// 确定（主操作）回调
          onCancel={this.handlecancelDialog}// 取消（辅操作）回调
        />
      </div>
    );
}
}