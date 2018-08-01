import React, { Component } from 'react';
import './ButtonBox.css';
import { Button } from 'antd';
import { Input, Col, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';
import {  } from '../../actions/axiosactions'
export default class ButtonBox extends Component {
  constructor(props) {
    super(props);
    this.state={
        mid:''
      }
      this.handlemid = this.handlemid.bind(this);
  }
  sousuo=()=>{
    const { todoActions } = this.props;
    const obj = this.state.mid;
    todoActions.sendmid(obj);
    console.log(obj)
  }
  handlemid=(e)=>{
    this.setState({
      mid:e.target.value
    })
  }
  render(){
    const InputGroup = Input.Group;
    return(
        <div className="ButtonBox">
            <div className="buttonright">
            <Button type="danger">返回</Button>
            </div>

            <div className="buttonleft">
            <Button className="buttonleft1">汇总</Button>
            <Button className="buttonleft2">摄影课</Button>
            <Button className="buttonleft3">绘画课</Button>
            <div className="buttonsright">
                <div>
                <InputGroup compact>
                <Select defaultValue="mid">
                <Option value="mid">mid</Option>
                </Select>
                <Input style={{ width: '50%' }} defaultValue="" onChange={this.handlemid}/>
                </InputGroup>
                </div>
                <div><button onClick={this.sousuo}>搜索</button></div>
            </div>
            </div>

        </div>
    )

}
}
