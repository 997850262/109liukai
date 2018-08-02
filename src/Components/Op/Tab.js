import React, { Component } from 'react';
import './Head.css';
import { Tabs } from 'antd';
import ListView from './ListView.js';
import ButtonBox from './ButtonBox.js';
import ButtonBox2 from './ButtonBox2.js';
import Satisfaction from './Satisfaction.js';
export default class Tab extends Component {
  constructor(props) {
    super(props);
  }


  render(){
    const{todoActions,List,state,router}=this.props;
    const TabPane = Tabs.TabPane;
    return(
        <div>
          <Tabs defaultActiveKey="1">
            <TabPane tab="课程信息" key="1" >
              <div>
              <ButtonBox todoActions={todoActions} router={router}/>
              </div>
              <div>
              <ListView todoActions={todoActions} List={List} state={state}/>
              </div>
            </TabPane>
            <TabPane tab="满意度反馈" key="2" >
              <div>
              <ButtonBox2 todoActions={todoActions}/>
              </div>
              <div>
              <Satisfaction todoActions={todoActions} List={List}/>
              </div>
            </TabPane>
          </Tabs>
        </div>
    )

}
}
