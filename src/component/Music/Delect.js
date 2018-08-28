import React from 'react';
import './Delect.css';


export default class Delect extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  getMaskClassName = isAcitve => {
    console.log(123987);
    if (!isAcitve) {
      return 'mask hideMask';
    }
    return 'mask showMask';
  }
  handledelect=() => {
    const { select, todoActions } = this.props;
    if (select === true) {
      todoActions.deleteone();
    } else {
      todoActions.deletemore();
    }
    this.props.onCancel();
  }
  renderbody=() => {
    const { music, select, ispart } = this.props;
    const count = music.music.selectmoreid.length;
    if (select == true && music.music.selectid > 0 && ispart == 4) {
      return (
        <div className="delect-Body">
          <div className="delect-title">确定删除{music.music.entities.list[music.music.selectid].name}音乐吗</div>
          <div className="delect-btn">
            <span className="delect-btn1" onClick={this.props.onCancel}>取消</span>
            <span className="delect-btn2" onClick={this.handledelect}>确定</span>
          </div>
        </div>
      );
    } else if (select == false && music.music.selectmoreid.length > 0 && ispart == 4) {
      return (
        <div className="delect-Body">
          <div className="delect-title">确定删除{count}首音乐吗</div>
          <div className="delect-btn">
            <span className="delect-btn1" onClick={this.props.onCancel}>取消</span>
            <span className="delect-btn2" onClick={this.handledelect}>确定</span>
          </div>
        </div>
      );
    }
    return null;
  }

  render() {
    const { isAcitve } = this.props;
    if (isAcitve == true) {
      return (
        <div>
          <div className={this.getMaskClassName(isAcitve)} />
          <div>
            {this.renderbody()}
          </div>
        </div>
      );
    }
    return null;
  }
}
