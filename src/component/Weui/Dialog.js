import React from 'react';
import PropTypes from 'prop-types';
import './Dialog.css';

export default class Dialog extends React.Component {

  static defaultProps = {
    type:{},       // 显示类型：iOS or Android（参看weui: https://weui.io/#dialog）
    isActive:false,   // 控制显示与否
    title:'',      // title文字
    renderBody:() => {}, // 中间body区域的渲染函数
    okText:true,     // 可定制，默认值为“确定”
    cancelText:false, // 可定制，默认值为“取消”
    onOk:() => {},       // 确定（主操作）回调
    onCancel: () => {},// 取消（辅操作）回调
    content:''
  };

  static propTypes = {
    type: PropTypes.object.isRequired,
    content:PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    renderBody: PropTypes.func.isRequired,
    okText: PropTypes.bool.isRequired,
    cancelText: PropTypes.bool.isRequired,
    onOk: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
  }
  getMaskClassName = () => {
    if (!this.props.isActive) {
      return 'mask hideMask';
    }
    return 'mask showMask';
  }
  renderBody=(key,title,isActive,content)=>{
      console.log(content)
      if(!isActive)
      return null
      else
      {
        if(key=='ios1')
        return(
            <div  className="Body">
                <div className="title">{title}</div>
                <div>{content}</div>
                <div className="fuzhubutton divider" onClick={this.props.onCancel}>辅助操作</div>
                <div className="zhubutton divider" onClick={this.props.onOk}>主操作</div>
            </div>
        )
        else if(key=='ios2')
        return(
            <div  className="Body">
                <div>{content}</div>
                <div className="ios2-btn" onClick={this.props.onCancel}>知道了</div>
            </div>
        )
        else if(key=='Android1')
        return(
            <div  className="Body">
                <div className="title">{title}</div>
                <div>{content}</div>
                <div className="Azhubutton divider" onClick={this.props.onOk}>主操作</div>
                <div className="Afuzhubutton divider" onClick={this.props.onCancel}>辅助操作</div>
            </div>
        )
        else if(key=='Android2')
        return(
            <div  className="Body">
                <div>{content}</div>
                <div className="Azhubutton divider" onClick={this.props.onOk}>主操作</div>
                <div className="Afuzhubutton divider" onClick={this.props.onCancel}>辅助操作</div>
            </div>
        )
       }
  }

  render() {
    const { title, type,isActive,okText,cancelText,content } = this.props;
    const key=type.key;
    return (
      <div>
        <div className={this.getMaskClassName()} onClick={this.props.onCancel} />
        <div >
            {this.renderBody(key,title,isActive,content)}
        </div>
      </div>
    );
  }
}