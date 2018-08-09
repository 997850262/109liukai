import React from 'react';
import ActionSheet from '../component/Weui/ActionSheet';
import '../component/Weui/actionSheet.css'
export default class Test extends React.Component {
  state = {
    type:{},
    isActionSheetActive: false,
    title: '',
    menus: []
  };

  handleShowActionSheet = () => {
    this.setState({
      type:{key:'ios'},
      isActionSheetActive: true,
      title: '这是一个标题',
      menus: [{
        title: '示例菜单1',
        click: () => console.log('示例菜单1')
      }, {
        title: '示例菜单2',
        click: () => console.log('示例菜单2')
      }]
    });
  }

  handleShowActionSheet2 = () => {
    this.setState({
      type:{key:'Android'},
      isActionSheetActive: true,
      title: '',
      menus: [{
        title: '示例菜单1',
        click: () => console.log('示例菜单1')
      },{
        title: '示例菜单2',
        type: 'danger',
        click: () => console.log('示例菜单2')
      }, {
        title: '示例菜单3',
        click: () => console.log('示例菜单3')
      }]
    });
  }

  handleHideActionSheet = () => {
    this.setState({
      isActionSheetActive: false
    });
  }

  render() {
    return (
      <div>
        <div onClick={this.handleShowActionSheet}>
        <button className="ios-button"> ios actionsheet</button>
        </div>
        <div onClick={this.handleShowActionSheet2}>
        <button className="Android-button">Android actionsheet</button>
        </div>

        <ActionSheet
          type={this.state.type}
          isActive={this.state.isActionSheetActive}
          title={this.state.title}
          menus={this.state.menus}
          onCancel={this.handleHideActionSheet}
        />
      </div>
    );
}
}