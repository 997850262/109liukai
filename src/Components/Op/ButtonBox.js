import React, { Component } from 'react';
import './ButtonBox.css';
import { Button } from 'antd';
export default class ButtonBox extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <div className="ButtonBox">
          <div className="buttonleft">
          <Button className="buttonleft1">汇总</Button>
          <Button className="buttonleft2">摄影</Button>
          <Button className="buttonleft3">绘画</Button>
          </div>
          <div className="buttonright">
          <Button type="danger">返回</Button>
          </div>
        </div>
    )

}
}
