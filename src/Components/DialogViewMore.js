import React, { Component } from 'react';
import './DialogView.css';
import { shanchu } from '../actions'
import { zhiding } from '../actions'
import { duoxuan } from '../actions'

const icon = require('./resource/icon_Good_B-2.png');
export default class DialogViewMore extends Component {
  handleClose = () => {
    //this.props.onCloseClick(false);
    const{isDialogActive,tianjia}=this.props
    this.setState({ isDialogActive: false,tianjia:false });
  }
zhiding=()=>{
    // this.props.onCloseClick(false);
  // const {onClick,idx} =this.props
  // if (onClick) {
  //   this.props.onzhidingClick()
  // }
this.handleClose();
const{dispatch,idx,messages,isDialogActive,duoxuan,vip}=thsi.props;
const action=shanchu(idx,messages,this.state.isDialogActive,duoxuan,vip)
dispatch(action)

  }
  shanchu=()=>{
    // this.props.onCloseClick(false);
    // const { onClick} = this.props;
    // if (onClick) {
    //   this.props.onshanchuClick()
    // }
    const{dispatch,idx,messages,isDialogActive,duoxuan}=thsi.props;
    this.handleClose();
    const action=shanchu(idx,messages,this.state.isDialogActive,duoxuan)
    dispatch(action)
  }
  duoxuan=()=>{
    // this.props.onCloseClick(false);
    // const { onClick} = this.props;
    // if (onClick) {
    //   this.props.onduoxuanClick()
    // }
    this.handleClose();
    this.setState({
      duoxuan:true,
      //select:true
    })
const{dispatch,idx,messages,isDialogActive,duoxuan}=thsi.props;
const action=shanchu(idx,messages,this.state.isDialogActive,duoxuan)
dispatch(action)
  }
  render(){
    const { isDialogActive,tianjia } = this.props;
    if (!isDialogActive) {
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