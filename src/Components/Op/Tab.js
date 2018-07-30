import React, { Component } from 'react';
import './Head.css';
import { Tabs } from 'antd';
import ListView from './ListView.js';
import ButtonBox from './ButtonBox.js';
export default class Tab extends Component {
  constructor(props) {
    super(props);
  }


  render(){
    const{todoActions,List,state}=this.props;
    const TabPane = Tabs.TabPane;
    return(
        <div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="课程信息" key="1" >
            <div>
            <ButtonBox todoActions={todoActions}/>
            </div>
            <div>
            <ListView todoActions={todoActions} List={List} state={state}/>
            </div>
            </TabPane>
            <TabPane tab="满意度反馈" key="2" ></TabPane>
          </Tabs>
        </div>
    )

}
}
