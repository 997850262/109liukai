import React, { Component } from 'react';
import './Head.css';
import { Table, Icon, Divider } from 'antd';
export default class ListView extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    const{List}=this.props;
    // filterDropdown:text=>{
    //   let num1=parseInt(text.split("/"[0],10));
    //   let num2=parseInt(text.split("/"[0],10));
    //   let num=num1/num2;
    //   if(num<80){
    //     return <span className="Red">{text}</span>
    //   }
    //   else if(num>95){
    //     return <span className="Orange">{text}</span>
    //   }
    //   else{
    //     return <span>{text}</span>
    //   }
    // }
    return(
      <div>
        <div>
          <p><br></br></p>
          <div>在学课程</div>
          <Table columns={List.columns} dataSource={List.dataSource} />
          <div>历史数据</div>
          <Table columns={List.column} dataSource={List.data} />
        </div>
      </div>
    )

}
}
