import React from 'react';
import Progress from '../component/Weui/Progress';
import '../component/Weui/Progress.css'
const icon=require('../component/Weui/叉.png')
export default class Test3 extends React.Component {
  state = {
    value:0,// 进度条的当前值
    showCancel:true, // 是否展示cancel图标按钮
  };

  handlecancelProgress = () => {
    this.setState({
      value:0
    });
  }

  render() {
    return (
      <div>
        <Progress
        value={this.state.value}
        showCancel={this.state.showCancel}
        onCancel={this.handlecancelProgress}
        />
      </div>
    );
}
}