import React, { Component } from 'react';
import './List.css';
import { Table, Icon, Divider } from 'antd';
import {column1} from './List';
export default class ListView extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const{DclassView}=this.props;
    return(
      <div className="list">
          <Table columns={column1} dataSource={DclassView.dataSource} />
      </div>
    )

}
}
