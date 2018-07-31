import React, { Component } from 'react';
import './Head.css';
import { Table, Icon, Divider } from 'antd';
import {column1, column2} from './List';
export default class ListView extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const{List}=this.props;
    return(
      <div>
        <div>
          <p><br></br></p>
          <div>在学课程</div>
          <Table columns={column1} dataSource={List.dataSource} />
          <div>历史数据</div>
          <Table columns={column2} dataSource={List.data} />
        </div>
      </div>
    )

}
}
