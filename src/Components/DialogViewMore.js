import React, { Component } from 'react';
import './DialogView.css';

export default class DialogView extends Component {
  handleClose = () => {
    this.props.onCloseClick(false);
  }
zhiding=()=>{
    this.props.onCloseClick(false);
  const {onClick,idx} =this.props
  if (onClick) {
    this.props.onzhidingClick()
  }
  }
  shanchu=()=>{
    this.props.onCloseClick(false);
    const { onClick} = this.props;
    if (onClick) {
      this.props.onshanchuClick()
    }
  }
  duoxuan=()=>{
    this.props.onCloseClick(false);
    const { onClick} = this.props;
    if (onClick) {
      this.props.onduoxuanClick()
    }
  }
  render(){
    const { isActive,isjia } = this.props;
    if (!isActive) {
        return null;
      }
    else {
        // if(!isjia){
            return(
                <div className="mask-ctn">
                <div className="close-btn" onClick={this.handleClose}>close</div>
                <div className="dialog-ctn">
                    <div onClick={this.zhiding}>
                    <input type="button" name="置顶" value="置顶"/>
                    </div>
                    <div  onClick={this.shanchu}>
                    <input type="button" name="删除" value="删除"/>
                    </div>
                    <div  onClick={this.duoxuan}>
                    <input type="button" name="多选" value="多选"/>
                    </div>
                </div>
                </div>
            );
        }
  }
}
// }