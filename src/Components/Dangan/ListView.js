import React, { Component } from 'react';
import './ButtonBox';
import { Table, Icon, Divider } from 'antd';
import {column1} from './List';
export default class ListView extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const{DListView}=this.props;
    return(
      <div>
        <div>
          <Table columns={column1} dataSource={DListView.dataSource} />
        </div>
      </div>
    )

}
}
