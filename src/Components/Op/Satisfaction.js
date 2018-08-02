import React, { Component } from 'react';
import { Table, Icon, Divider } from 'antd';
import {column3} from './List';
import { Popover, Button } from 'antd';
export default class Satisfaction  extends Component {
  constructor(props) {
    super(props);
  }
callbackid=(e)=>{
    const{todoActions}=this.props;
    const obj=e;
    todoActions.sendid(obj)
}
  render(){
    const{List}=this.props;
    return(
        <div>
          <Table columns={column3} dataSource={List.Satisfaction} 
          // onRow={(record)=>{ return{ onClick: () => {}}}}  
          onRowClick={record=>{
            // console.log(record.class_info.id)
            this.callbackid(record.class_info.id)
          }}
          />
        </div>
    )

}
}
